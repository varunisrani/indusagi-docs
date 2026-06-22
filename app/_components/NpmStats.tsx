"use client";

import { useEffect, useState, useCallback } from "react";

type NpmStatsProps = {
  package: string;
  label?: string;
};

type DownloadData = {
  downloads: number;
  day: string;
};

type NpmPointResponse = {
  downloads: number;
  package: string;
  start: string;
  end: string;
};

type NpmRangeResponse = {
  downloads: DownloadData[];
  package: string;
  start: string;
  end: string;
};

type Stats = {
  weekly: number;
  monthly: number;
  yearly: number;
  dailyData: DownloadData[];
};

export function NpmStats({ package: pkg, label }: NpmStatsProps) {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [weeklyRes, monthlyRes, yearlyRes, rangeRes] = await Promise.all([
        fetch(`https://api.npmjs.org/downloads/point/last-week/${pkg}`),
        fetch(`https://api.npmjs.org/downloads/point/last-month/${pkg}`),
        fetch(`https://api.npmjs.org/downloads/point/last-year/${pkg}`),
        fetch(`https://api.npmjs.org/downloads/range/last-week/${pkg}`),
      ]);

      if (!weeklyRes.ok || !monthlyRes.ok || !yearlyRes.ok || !rangeRes.ok) {
        throw new Error("Failed to fetch download stats");
      }

      const [weeklyData, monthlyData, yearlyData, rangeData] = await Promise.all([
        weeklyRes.json() as Promise<NpmPointResponse>,
        monthlyRes.json() as Promise<NpmPointResponse>,
        yearlyRes.json() as Promise<NpmPointResponse>,
        rangeRes.json() as Promise<NpmRangeResponse>,
      ]);

      setStats({
        weekly: weeklyData.downloads,
        monthly: monthlyData.downloads,
        yearly: yearlyData.downloads,
        dailyData: rangeData.downloads || [],
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load stats");
    } finally {
      setLoading(false);
    }
  }, [pkg]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  const card =
    "rounded-[14px] border border-[color:var(--border)] overflow-hidden";

  if (loading) {
    return (
      <div className={card} style={{ background: "var(--surface)" }}>
        <div className="flex items-center justify-center" style={{ padding: "56px 24px" }}>
          <div className="flex flex-col items-center gap-3">
            <div
              className="animate-spin rounded-full"
              style={{ width: 26, height: 26, border: "2px solid var(--accent)", borderTopColor: "transparent" }}
            />
            <span className="text-[color:var(--muted)]" style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12 }}>
              Loading stats…
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={card} style={{ background: "var(--surface)" }}>
        <div className="flex flex-col items-center justify-center text-center" style={{ padding: "40px 24px" }}>
          <div className="text-[color:var(--muted)]" style={{ fontSize: 14 }}>Couldn’t load stats</div>
          <button onClick={fetchStats} className="text-[color:var(--accent)]" style={{ marginTop: 12, fontSize: 13, background: "transparent", border: "none", cursor: "pointer" }}>
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (!stats) return null;

  const statCell = (value: string, name: string) => (
    <div className="text-center" style={{ background: "var(--surface)", padding: "18px 8px" }}>
      <div style={{ fontFamily: "var(--font-sans), sans-serif", fontWeight: 700, fontSize: 24, letterSpacing: "-0.015em", color: "var(--fg)" }}>
        {value}
      </div>
      <div className="text-[color:var(--muted)]" style={{ fontSize: 12, marginTop: 4 }}>
        {name}
      </div>
    </div>
  );

  return (
    <div className={card} style={{ background: "var(--surface)" }}>
      {/* Header */}
      <div className="flex items-center border-b border-[color:var(--border)]" style={{ padding: "14px 18px" }}>
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="flex items-center justify-center shrink-0 rounded-lg"
            style={{ width: 36, height: 36, background: "var(--accent-soft)", color: "var(--accent)" }}
          >
            <NpmIcon />
          </div>
          <div className="min-w-0">
            <div className="text-[color:var(--muted)] uppercase" style={{ fontFamily: "var(--font-mono), monospace", fontSize: 10, letterSpacing: ".1em" }}>
              {label || "Package"}
            </div>
            <div className="truncate" style={{ fontFamily: "var(--font-sans), sans-serif", fontWeight: 600, fontSize: 15, color: "var(--fg)" }}>
              {pkg}
            </div>
          </div>
        </div>
      </div>

      {/* Body — download counts as a flat stat grid (year / month / week) */}
      <div style={{ padding: 18 }}>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 1,
            background: "var(--border)",
            border: "1px solid var(--border)",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          {statCell(formatNumber(stats.yearly), "per year")}
          {statCell(formatNumber(stats.monthly), "monthly")}
          {statCell(formatNumber(stats.weekly), "weekly")}
        </div>
      </div>
    </div>
  );
}

function NpmIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zM4.24 4.5h15.52v15.52H4.24V4.5zm3.12 3.12v9.28h3.12v-6.16h3.04v6.16h3.12V7.62H7.36z" />
    </svg>
  );
}

