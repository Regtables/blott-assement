'use client'

const NewsCardSkeleton = ({ isFeatured = false }: { isFeatured?: boolean }) => (
  <div className={`animate-pulse ${isFeatured ? 'lg:col-span-2' : 'col-span-1'}`}>
    <div className={`bg-gray-600 rounded-md mb-4 ${isFeatured ? 'h-539 lg:h-539 h-402' : 'h-199'}`} />
    <div className="space-y-3">
      <div className="h-4 bg-gray-600 rounded w-3/4" />
      <div className="h-4 bg-gray-600 rounded w-1/2" />
    </div>
  </div>
)

const NewsListSkeleton = () => (
  <section className="w-full min-w-full flex flex-col items-start lg:gap-75 gap-14">
    <div className="grid w-full lg:grid-cols-4 grid-cols-1 gap-x-4 gap-y-14">
      {Array.from({ length: 8 }).map((_, i) => (
        <NewsCardSkeleton key={i} isFeatured={i === 0} />
      ))}
    </div>
  </section>
)

export default NewsListSkeleton