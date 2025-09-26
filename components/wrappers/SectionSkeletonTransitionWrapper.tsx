"use client";

import { useMemo, useRef } from "react";

type SimpleSectionWrapperProps = {
  ContentComponent: React.ComponentType<any>;
  contentProps: Record<string, any>;
  SkeletonComponent: React.ComponentType<{
    onComplete?: () => void;
    [key: string]: any;
  }>;
  skeletonProps?: Record<string, any>;
  className?: string;
};

const SectionSkeletonTransitionWrapper = ({
  ContentComponent,
  contentProps,
  SkeletonComponent,
  skeletonProps = {},
  className = "relative",
}: SimpleSectionWrapperProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const showContent = useMemo(() => {
    return Object.values(contentProps)[0].length > 0
  }, [contentProps])

  return (
    <div ref={containerRef} className={className}>
      {!showContent ? (
        <SkeletonComponent
          {...skeletonProps}
        />
      ) : (
        <ContentComponent {...contentProps} />
      )}
    </div>
  );
};

export default SectionSkeletonTransitionWrapper;
