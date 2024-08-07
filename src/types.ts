export type SectionType = {
  class?: string;
  dataLink: string;
};

export type StructuredData = {
  [key: string]: any;
};

export type HeadProps = {
  description: string;
  image: string;
  keywords: string[];
  redirectTo?: string;
  structuredData: StructuredData;
  title: string;
  twitterData1?: string;
  twitterData2?: string;
  twitterLabel1?: string;
  twitterLabel2?: string;
};
