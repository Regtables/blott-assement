import { useQuery } from '@tanstack/react-query'
import { getNews } from '@/app/lib/actions'
import { NewsItem } from '@/types'

export const newsKeys = {
  all: ['news'] as const,
  general: () => [...newsKeys.all, 'general'] as const,
  category: (category: string) => [...newsKeys.all, category] as const,
}

export const getNewsData = async (): Promise<NewsItem[]> => {
  return await getNews()
}

export const useGetNews = (enabled = true) =>
  useQuery({
    queryKey: newsKeys.general(),
    queryFn: getNewsData,
    enabled,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  })