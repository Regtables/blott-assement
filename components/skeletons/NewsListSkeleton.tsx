"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NewsCardSkeleton = ({ isFeatured = false }: { isFeatured?: boolean }) => (
  <div
    className={`skeleton-card ${isFeatured ? "lg:col-span-2" : "col-span-1"}`}
  >
    <div
      className={`bg-gray-600 rounded-md mb-4 animate-pulse ${
        isFeatured ? "h-539 lg:h-539 h-402" : "h-199"
      }`}
    />
    <div className="space-y-3">
      <div className="h-4 bg-gray-600 rounded w-3/4 animate-pulse" />
      <div className="h-4 bg-gray-600 rounded w-1/2 animate-pulse" />
    </div>
  </div>
);

type NewsListSkeletonProps = {
  onComplete?: () => void;
};

const NewsListSkeleton = ({ onComplete }: NewsListSkeletonProps) => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const skeletonCards = gsap.utils.toArray(".skeleton-card");

      gsap.set(skeletonCards, { autoAlpha: 0, y: 20 });

      const tl = gsap.timeline();

      tl.to(skeletonCards, {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
      })

        .to(skeletonCards, {
          autoAlpha: 0,
          y: -10,
          duration: 0.3,
          stagger: 0.04,
          ease: "power2.in",
          delay: 1.2,
        })
        .call(() => {
          onComplete?.();
        });

      return () => {
        tl.kill();
      };
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="flex flex-col lg:gap-75 gap-14">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-4 lg:gap-y-14 gap-y-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <NewsCardSkeleton key={i} isFeatured={i === 0} />
        ))}
      </div>
    </section>
  );
};

export default NewsListSkeleton;
