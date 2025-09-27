import NewsHeading from "@/components/NewsHeading";
import NewsWrapper from "@/components/sections/NewsSection";

export default function HomePage() {
  return (
    <div className="px-mobile-x lg:px-desktop-x flex flex-col lg:gap-24 gap-14">
      <NewsHeading />
      <NewsWrapper transitionDuration={0.8} />
    </div>
  );
}
