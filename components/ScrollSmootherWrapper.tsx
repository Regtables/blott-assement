"use client";

import React, { PropsWithChildren, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { PropsWithClassName } from "@/types";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

interface ScrollSmootherConfig {
  smooth?: number;
  smoothTouch?: number | boolean;
  normalizeScroll?: boolean;
  ignoreMobileResize?: boolean;
  effects?: boolean;
}

interface ScrollSmootherWrapperProps extends PropsWithClassName<ScrollSmootherConfig & PropsWithChildren> {
  contentClassName?: string;
}

const defaultConfig: Required<ScrollSmootherConfig> = {
  smooth: 1,
  smoothTouch: 0.1,
  normalizeScroll: true,
  ignoreMobileResize: true,
  effects: true,
};

const ScrollSmootherWrapper = ({
  children,
  className = "overflow-hidden",
  contentClassName,
  smooth = defaultConfig.smooth,
  smoothTouch = defaultConfig.smoothTouch,
  normalizeScroll = defaultConfig.normalizeScroll,
  ignoreMobileResize = defaultConfig.ignoreMobileResize,
  effects = defaultConfig.effects,
}: ScrollSmootherWrapperProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!wrapperRef.current || !contentRef.current) return;

    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth,
      smoothTouch,
      normalizeScroll,
      ignoreMobileResize,
      effects,
    });

    return () => {
      smoother?.kill();
    };
  }, [smooth, smoothTouch, normalizeScroll, ignoreMobileResize, effects]);

  return (
    <div ref={wrapperRef} className={className}>
      <div ref={contentRef} className={contentClassName}>
        {children}
      </div>
    </div>
  );
};

export default ScrollSmootherWrapper;

export const useScrollSmoother = () => {
  return ScrollSmoother.get();
};