'use client'

import { useEffect, useRef, useState } from "react";

type SimpleSectionWrapperProps = {
  ContentComponent: React.ComponentType<any>;
  contentProps: Record<string, any>;
  SkeletonComponent: React.ComponentType<{ onComplete?: () => void; [key: string]: any }>;
  skeletonProps?: Record<string, any>;
  className?: string;
};

const SectionSkeletonTransitionWrapper = ({ 
  ContentComponent, 
  contentProps,
  SkeletonComponent,
  skeletonProps = {},
  className = "relative"
}: SimpleSectionWrapperProps) => {
  const [showContent, setShowContent] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  console.log(contentProps)

  useEffect(() => {
    if(Object.values(contentProps).length > 0){
      setTimeout(() => {
        setShowContent(true)
      
      }, 100);
    }
  }, [contentProps])

  const handleSkeletonComplete = () => {
    // setTimeout(() => {
      setShowContent(true);
    // }, 100);
  };

  return (
    <div ref={containerRef} className={className}>
      {!showContent ? (
        <></>
        // <SkeletonComponent 
        //   {...skeletonProps}
        //   onComplete={handleSkeletonComplete}
        // />
      ) : (
        <ContentComponent {...contentProps} />
      )}
    </div>
  );
};

export default SectionSkeletonTransitionWrapper