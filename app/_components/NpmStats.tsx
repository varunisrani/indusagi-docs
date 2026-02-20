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
  const [copied, setCopied] = useState(false);

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

  const copyToClipboard = async () => {
    const command = `npm install ${pkg}`;
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = command;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  if (loading) {
    return (
      <div className="surface-strong rounded-xl sm:rounded-2xl p-4 sm:p-6">
        <div className="flex items-center justify-center py-8 sm:py-12">
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-2 border-[color:var(--accent)] border-t-transparent"></div>
            <span className="text-xs sm:text-sm text-[color:var(--muted)]">Loading stats...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="surface-strong rounded-xl sm:rounded-2xl p-4 sm:p-6">
        <div className="flex flex-col items-center justify-center py-6 sm:py-8 text-center">
          <div className="text-red-500 mb-2 text-lg sm:text-xl">⚠️</div>
          <div className="text-xs sm:text-sm text-red-500">{error}</div>
          <button
            onClick={fetchStats}
            className="mt-3 text-xs text-[color:var(--accent)] hover:underline"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (!stats) return null;

  return (
    <div className="surface-strong rounded-xl sm:rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="px-4 sm:px-6 py-3 sm:py-5 border-b border-[color:var(--border)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#fe6027] to-[#ff8a50] flex items-center justify-center">
              <NpmIcon />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs text-[color:var(--muted)] uppercase tracking-wider">
                {label || "Package"}
              </div>
              <div className="text-sm sm:text-base font-semibold text-[color:var(--ink)]">{pkg}</div>
            </div>
          </div>
          <a
            href={`https://www.npmjs.com/package/${pkg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors p-1"
          >
            <ExternalLinkIcon />
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="p-4 sm:p-6">
        {/* Total Downloads */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="text-3xl sm:text-4xl font-bold text-[color:var(--accent)] mb-0.5 sm:mb-1">
            {formatNumber(stats.yearly)}
          </div>
          <div className="text-xs sm:text-sm text-[color:var(--muted)]">Total Downloads (Last Year)</div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="bg-[rgba(255,122,69,0.12)] rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
            <div className="text-xl sm:text-2xl font-bold text-[color:var(--ink)]">{formatNumber(stats.monthly)}</div>
            <div className="text-[10px] sm:text-xs text-[color:var(--muted)] mt-0.5 sm:mt-1">Monthly</div>
          </div>
          <div className="bg-[rgba(34,211,238,0.1)] rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
            <div className="text-xl sm:text-2xl font-bold text-[color:var(--ink)]">{formatNumber(stats.weekly)}</div>
            <div className="text-[10px] sm:text-xs text-[color:var(--muted)] mt-0.5 sm:mt-1">Weekly</div>
          </div>
        </div>

        {/* Install Button */}
        <button
          onClick={copyToClipboard}
          className={`w-full flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-200 ${
            copied
              ? "bg-green-500 text-white"
              : "bg-[color:var(--accent)] text-white hover:opacity-90"
          }`}
        >
          {copied ? (
            <>
              <CheckIcon />
              Copied!
            </>
          ) : (
            <>
              <CopyIcon />
              <code className="text-[10px] sm:text-xs">npm install {pkg}</code>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// Icons
function NpmIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white sm:w-5 sm:h-5">
      <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zM4.24 4.5h15.52v15.52H4.24V4.5zm3.12 3.12v9.28h3.12v-6.16h3.04v6.16h3.12V7.62H7.36z" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-3.5 sm:h-3.5">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-3.5 sm:h-3.5">
      <polyline points="20,6 9,17 4,12" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-4 sm:h-4">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
