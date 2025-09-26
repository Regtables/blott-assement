import { getNews } from "@/app/lib/actions";
import NewsHeading from "@/components/NewsHeading";
import SectionSkeletonTransitionWrapper from "@/components/wrappers/SectionSkeletonTransitionWrapper";
import NewsListSkeleton from "@/components/skeletons/NewsListSkeleton";
import NewsList from "@/components/NewsList";

export default async function HomePage() {
  const news = await getNews();
  
  return (
    <div className="px-mobile-x lg:px-desktop-x flex flex-col lg:gap-24 gap-14">
      <NewsHeading />
      
      <SectionSkeletonTransitionWrapper 
        ContentComponent={NewsList}
        contentProps={{ newsData: news }}
        SkeletonComponent={NewsListSkeleton}
        skeletonProps={{ 
          animationConfig: { 
            staggerIn: 0.1, 
            showDuration: 1.5 
          }
        }}
      />
    </div>
  );
}