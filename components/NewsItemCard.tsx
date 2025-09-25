import { cn } from "@/app/lib/utils";
import { NewsItem, PropsWithClassName } from "@/types";
import Image from "next/image";
import React from "react";
import ReadMoreButton from "./ReadMoreButton";
import Link from "next/link";

type NewsItemCardProps = PropsWithClassName<{
  newsItem: NewsItem;
  isFeatured?: boolean;
}>;

const NewsItemCard = ({ newsItem, isFeatured, className }: NewsItemCardProps) => {
  return (
    <article
      className={cn(
        "relative col-span-1 flex flex-col gap-4 focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2 focus-within:ring-offset-black rounded-md group",
        isFeatured && "lg:col-span-2",
        className
      )}
    >
      <Link 
        href={newsItem.url}
        target="_blank"
        rel="noopener noreferrer"
        className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-md"
        aria-label={`Read article: ${newsItem.headline} from ${newsItem.source}`}
      >
        <div className={cn("w-full h-199", isFeatured && 'lg:h-539 h-402')}>
          <figure className="relative h-full w-full">
            <Image
              src={newsItem.image}
              fill
              alt=""
              className="rounded-md object-cover"
            />
          </figure>
        </div>

        <div className={cn('flex flex-col gap-4 relative', isFeatured && 'absolute bottom-0 lg:px-7 lg:pt-9 lg:pb-7 px-5 py-5 bg-gradient backdrop-blur-[10px] rounded-b-md')}>
          <div className={cn("h-px w-full bg-gradient-to-r from-accent-orange to-transparent absolute start-0 top-0 hidden", isFeatured && 'block')}/>
          
          <h2 className="lg:text-2xl leading-[130%] text-white">
            {newsItem.headline}
          </h2>

          <ReadMoreButton 
            url={newsItem.url} 
            headline={newsItem.headline}
          />
        </div>
      </Link>
    </article>
  );
};
export default NewsItemCard;
