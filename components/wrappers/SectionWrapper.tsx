"use client";

import { useRef, useState } from "react";
import { useQuery } from '@tanstack/react-query';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type SectionWrapperProps = {
  ContentComponent: React.ComponentType<any>;
  LoadingComponent: React.ComponentType<any>;
  queryKey: string[];
  queryFn: () => Promise<any>;
  className?: string;
  transitionDuration?: number;
  queryOptions?: {
    enabled?: boolean;
    staleTime?: number;
    refetchOnWindowFocus?: boolean;
  };
};

const SectionWrapper = ({
  ContentComponent,
  LoadingComponent,
  queryKey,
  queryFn,
  className = "relative",
  transitionDuration = 0.6,
  queryOptions = {}
}: SectionWrapperProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showContent, setShowContent] = useState(false);

  const { data, isLoading, isSuccess, error } = useQuery({
    queryKey,
    queryFn,
    enabled: true,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    ...queryOptions
  });

  // Trigger transition when data is ready
  useGSAP(() => {
    if (isSuccess && !showContent) {
      // Small delay to ensure content is rendered
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isSuccess, showContent]);

  // Handle animations when showContent changes
  useGSAP(() => {
    if (!containerRef.current) return;

    const loadingEl = containerRef.current.querySelector('.loading-layer');
    const contentEl = containerRef.current.querySelector('.content-layer');

    if (showContent && loadingEl && contentEl) {
      const tl = gsap.timeline();

      tl.to(loadingEl, {
        autoAlpha: 0,
        y: -20,
        duration: transitionDuration * 0.6,
        ease: "power2.in"
      })
      .fromTo(contentEl,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: transitionDuration,
          ease: "power2.out"
        },
        `-=${transitionDuration * 0.3}`
      );
    }
  }, [showContent, transitionDuration]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center min-h-64">
        <h3 className="text-lg font-medium mb-2">Failed to load content</h3>
        <p className="text-gray-400 text-sm mb-4">
          {error instanceof Error ? error.message : 'Something went wrong'}
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={className}>
      {/* Loading Layer */}
      {!showContent && (
        <div className="loading-layer">
          <LoadingComponent />
        </div>
      )}

      {/* Content Layer */}
      {showContent && (
        <div className="content-layer opacity-0">
          <ContentComponent {...data} />
        </div>
      )}
    </div>
  );
};

export default SectionWrapper;
