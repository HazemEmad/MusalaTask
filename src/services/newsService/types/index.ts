export type newResponseType = {
  status: 'ok' | 'error';
  totalResults: number;
  articles: articles[];
};
export type articles = {
  source: {id: string; name: string};
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
