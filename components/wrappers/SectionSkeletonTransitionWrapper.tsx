'use client'

import { useRef, useState } from 'react';

type SectionSkeletonTransitionWrapperProps<TContent = any, TSkeleton = any> = {
  ContentComponent: React.ComponentType<TContent>;
  contentProps: TContent;
  SkeletonComponent: React.ComponentType<TSkeleton & { onComplete?: () => void }>;
  skeletonProps?: Omit<TSkeleton, 'onComplete'>;
  className?: string;
};

const SectionSkeletonTransitionWrapper = <TContent, TSkeleton>({ 
  ContentComponent, 
  contentProps,
  SkeletonComponent,
  skeletonProps = {} as TSkeleton,
  className = "relative"
}: SectionSkeletonTransitionWrapperProps<TContent, TSkeleton>) => {
  const [showContent, setShowContent] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSkeletonComplete = () => {
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <div ref={containerRef} className={className}>
      {!showContent ? (
        <SkeletonComponent 
          {...(skeletonProps as TSkeleton)}
          onComplete={handleSkeletonComplete}
        />
      ) : (
        // @ts-ignore
        <ContentComponent {...contentProps} />
      )}
    </div>
  );
};

export default SectionSkeletonTransitionWrapper;