import { Suspense } from 'react';
import { getNews } from '@/app/lib/actions';
import NewsList from '@/components/NewsList';
import NewsListSkeleton from '@/components/skeletons/NewsListSkeleton';
import NewsHeading from '@/components/NewsHeading';

export const dynamic = 'force-dynamic'

async function NewsContent() {
  const news = await getNews();
  return <NewsList newsData={news} />;
}

export default function HomePage() {
  return (
    <div className="px-mobile-x lg:px-desktop-x flex flex-col lg:gap-24 gap-14">
      <NewsHeading />
      
      <Suspense fallback={<NewsListSkeleton />}>
        <NewsContent />
      </Suspense>
    </div>
  );
}