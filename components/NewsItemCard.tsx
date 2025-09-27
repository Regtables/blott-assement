import { cn } from "@/app/lib/utils";
import { NewsItem, PropsWithClassName } from "@/types";
import Image from "next/image";
import React from "react";
import MainButton from "./MainButton";
import Link from "next/link";
import { ImageOff } from "lucide-react";

type NewsItemCardProps = PropsWithClassName<{
  newsItem: NewsItem;
  isFeatured?: boolean;
}>;

const NewsItemCard = ({
  newsItem,
  isFeatured,
  className,
}: NewsItemCardProps) => {
  return (
    <Link
      href={newsItem.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Read article: ${newsItem.headline} from ${newsItem.source}`}
      className={cn(
        "relative col-span-1 flex flex-col gap-4 h-full border-white/0 group hover:border-white/40 border-2 rounded-md transition-all duration-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black",
        isFeatured && "md:col-span-2",
        className
      )}
    >
      <article
        className={cn(
          "relative flex flex-col gap-4 group-hover:!scale-[0.95] transition-all duration-500",
          className
        )}
      >
        <div
          className={cn("w-full h-199", isFeatured && "lg:h-[539px] h-[402px]")}
        > 
          {newsItem.image ? (
            <figure className="relative h-full w-full">
              <Image
                src={newsItem.image}
                fill
                alt={`${newsItem.headline} featured image`}
                objectFit="cover"
                className="rounded-md"
              />
            </figure>
          ) : (
            <div className="w-full h-full bg-black flex items-center justify-center">
              <ImageOff />
            </div>
          )}
        </div>

        <div
          className={cn(
            "flex flex-col w-full gap-4 relative",
            isFeatured &&
              "absolute bottom-0 lg:px-7 lg:pt-9 lg:pb-7 px-[20px] py-[20px] bg-gradient backdrop-blur-custom rounded-b-md"
          )}
        >
          <div
            className={cn(
              "h-[1px] w-full bg-gradient-to-r from-[#FF9D00] to-transparent absolute start-0 top-0 hidden",
              isFeatured && "block"
            )}
          />
          <h3 className="lg:text-2xl leading-[130%]">{newsItem.headline}</h3>

          <MainButton url={newsItem.url} headline={newsItem.headline} />
        </div>
      </article>
    </Link>
  );
};

export default NewsItemCard;
