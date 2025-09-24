export interface NewsItem {
  category: string;
  datetime: number;
  headline: string;
  id: number;
  image: string;
  related: string;
  source: string;
  summary: string;
  url: string;
}

export type NewsResponse = NewsItem[];

export interface NewsListProps {
  initialNews: NewsResponse;
}

export interface NewsCardProps {
  newsItem: NewsItem;
}

export interface ApiError {
  message: string;
  status?: number;
}

// Utility type for formatted date
export interface FormattedNewsItem extends Omit<NewsItem, 'datetime'> {
  datetime: number; // Keep original
  formattedDate: string; // Add formatted version
}

// API action response type
export interface NewsActionResponse {
  success: boolean;
  data?: NewsResponse;
  error?: string;
}

export type PropsWithClassName<P = unknown> = P & {
  className?: string
}