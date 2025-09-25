"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NewsHeading = () => {
  useGSAP(() => {
    const headingTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".news-heading",
      },
    });

    gsap.set([".heading-latest", ".heading-from", ".heading-world"], {
      yPercent: 150,
    });
    gsap.set('.news-heading-line', { scaleX: 0 })
    gsap.set(".bitcoin-logo", { opacity: 0 });

    headingTl
      .fromTo(
        ".heading-latest",
        { yPercent: 150, skewY: 10 },
        { yPercent: 0, skewY: 0, ease: 'power2.out', duration: 0.5 }
      )
      .fromTo(
        ".heading-from",
        { yPercent: 150, skewY: 20 },
        { yPercent: 0, skewY: 0, ease: 'power2.out', duration: 0.5  }, '-=0.3'
      )
      .fromTo(".news-heading-line", { scaleX: 0 }, { scaleX: 1, ease: 'power3' }, '-=0.2')
      .fromTo(
        ".heading-world",
        { yPercent: 150, skewY: 15 },
        { yPercent: 0, skewY: 0, ease: 'power2.out', duration: 0.5  }, '-=0.3'
      )
      .fromTo(".bitcoin-logo", { opacity: 0 }, { opacity: 1 }, '-=0.2');


      return () => {
        headingTl.kill()
      }
  });
  return (
    <div className="news-heading lg:text-[80px] text-[40px] leading-[40px] font-helvetica uppercase lg:leading-[80px]">
      <div className="overflow-hidden">
        <h1 className="heading-latest">Latest News</h1>
      </div>
      <div className="flex items-center lg:gap-6">
        <div className="overflow-hidden">
          <h1 className="heading-from font-albra leading-[80px]">From</h1>
        </div>

        <div className="news-heading-line lg:block hidden h-[1px] lg:w-[200px] bg-white origin-left" />

        <div className="flex items-start gap-2">
          <div className="overflow-hidden">
            <h1 className="heading-world">The World</h1>
          </div>

          <Image
            src={"/bitcoin-icon.svg"}
            height={24}
            width={24}
            alt="Bitcoin logo"
            className="bitcoin-logo mt-3 lg:block hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsHeading;
