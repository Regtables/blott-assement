import { Suspense } from "react";

import { getNews } from "@/app/lib/actions";

import NewsList from "@/components/NewsList";
import NewsHeading from "@/components/NewsHeading";
import NewsListSkeleton from "@/components/skeletons/NewsListSkeleton";

export default async function Home() {
  const news = await getNews()

  return (
    <div className="px-desktop-x flex flex-col lg:gap-24 gap-14">
      <NewsHeading />

      <Suspense fallback = {<NewsListSkeleton />}>
        <NewsList newsData={news} />
      </Suspense>
    </div>
  );
}
