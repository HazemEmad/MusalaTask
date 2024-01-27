export type newResponseType = {
  status: 'ok' | 'error';
  totalResults: number;
  articles: articles[];
  page: number;
};
export type newResponseErrorType = {
  status: 'ok' | 'error';
  code: string;
  message: string;
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
