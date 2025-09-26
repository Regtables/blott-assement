'use client'

import { useRef, useState } from 'react';
import { NewsItem } from '@/types';
import NewsList from './NewsList';
import NewsListSkeleton from './skeletons/NewsListSkeleton';

type NewsTransitionWrapperProps = {
  newsData: NewsItem[];
};

const NewsTransitionWrapper = ({ newsData }: NewsTransitionWrapperProps) => {
  const [showContent, setShowContent] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSkeletonComplete = () => {
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <div ref={containerRef} className="relative">
      {!showContent ? (
        <NewsListSkeleton onComplete={handleSkeletonComplete} />
      ) : (
        <NewsList newsData={newsData} />
      )}
    </div>
  );
};

export default NewsTransitionWrapper;