export interface blogCardProp {
  title: string;
  category: string;
  currentSlug: string;
  publishedAt: string;
  titleImage: React.ReactNode;
}

export interface fetchDataProp {
  title: string;
  category: string;
  currentSlug: string;
  publishedAt: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
  titleImage: React.ReactNode;
}

export interface blogDetailsCardProp {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
  category: string;
  currentSlug: string;
  publishedAt: string;
  titleImage: React.ReactNode;
}

export interface blogCategoryCardProp {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
  category: string;
  currentSlug: string;
  publishedAt: string;
  titleImage: React.ReactNode;
}
