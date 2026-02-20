export type DocEntry = {
  slug: string;
  title: string;
  section: string;
  order: number;
};

export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

export type DocContent = {
  slug: string;
  title: string;
  section: string;
  html: string;
  raw: string;
  toc: TocItem[];
};
