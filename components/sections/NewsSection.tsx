"use client";

import SectionWrapper from "../wrappers/SectionWrapper";
import NewsList from "@/components/NewsList";
import NewsListSkeleton from "@/components/skeletons/NewsListSkeleton";
import { getNewsData, newsKeys } from "@/queries/news";

type NewsSectionProps = {
  className?: string;
  transitionDuration?: number;
};

const NewsSection = ({ 
  className,
  transitionDuration = 0.8 
}: NewsSectionProps) => (
  <SectionWrapper
    ContentComponent={NewsList}
    LoadingComponent={NewsListSkeleton}
    queryKey={newsKeys.general()}
    queryFn={async () => {
      const newsData = await getNewsData();
      return { newsData };
    }}
    className={className}
    transitionDuration={transitionDuration}
    queryOptions={{
      staleTime: 10 * 60 * 1000, // 10 minutes
      refetchOnWindowFocus: false,
    }}
  />
);

export default NewsSection;