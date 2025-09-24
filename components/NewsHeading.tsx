'use client'

import Image from "next/image";

const NewsHeading = () => {
  return (
    <div className="lg:text-[80px] text-[40px] leading-[40px] font-helvetica uppercase lg:leading-[80px]">
      <h1>Latest News</h1>
      <div className="flex items-center lg:gap-6">
        <h1 className="font-albra leading-[80px]">From</h1>

        <div className="lg:block hidden h-[1px] lg:w-[200px] bg-white" />

        <div className="flex items-start gap-2">
          <h1 className="">The World</h1>
          <Image
            src={"/bitcoin-icon.svg"}
            height={24}
            width={24}
            alt="Bitcoin logo"
            className="mt-3 lg:block hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsHeading;
