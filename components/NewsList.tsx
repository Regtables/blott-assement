import { NewsItem } from "@/types";
import React from "react";
import NewsItemCard from "./NewsItemCard";
import NewsHeading from "./NewsHeading";

type NewsListProps = {
  newsData: NewsItem[];
};

const NewsList = ({ newsData }: NewsListProps) => {
  return (
    <section className="section-padding flex flex-col lg:gap-75 gap-14">
     <NewsHeading />

      <div className="grid lg:grid-cols-4 grid-cols-1 gap-x-4 lg:gap-y-14 gap-y-4">
        {newsData.map((newsItem, i) => (
          <NewsItemCard
            key={newsItem.id}
            newsItem={newsItem}
            isFeatured={i === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default NewsList;
