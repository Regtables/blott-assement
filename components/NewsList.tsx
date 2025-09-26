"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { NewsItem } from "@/types";
import NewsItemCard from "./NewsItemCard";

type NewsListProps = {
  newsData: NewsItem[];
};

const NewsList = ({ newsData }: NewsListProps) => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const newsItems = gsap.utils.toArray<HTMLElement>(".news-item");

    gsap.set(newsItems, { autoAlpha: 0, y: 30 });

    ScrollTrigger.batch(".news-item", {
      onEnter: (elements) => {
        gsap.to(
          elements,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power.out",
            stagger: 0.1,
          }
        );
      },
      start: "top 85%",
      once: true
    });
  }, []);

  return (
    <section ref={containerRef} className="flex flex-col lg:gap-75 gap-14">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-4 lg:gap-y-14 gap-y-4">
        {newsData.map((newsItem, i) => (
          <NewsItemCard
            key={newsItem.id}
            newsItem={newsItem}
            isFeatured={i === 0}
            className="news-item opacity-0"
          />
        ))}
      </div>
    </section>
  );
};

export default NewsList;
