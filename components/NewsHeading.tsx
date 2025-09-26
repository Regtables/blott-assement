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
      opacity: 1, 
    });
    gsap.set('.news-heading-line', { 
      scaleX: 0,
      opacity: 1 
    });
    gsap.set(".bitcoin-logo", { 
      opacity: 0
    });

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
        { yPercent: 180, skewY: 15 },
        { yPercent: 0, skewY: 0, ease: 'power2.out', duration: 0.5  }, '-=0.3'
      )
      .fromTo(".bitcoin-logo", { opacity: 0 }, { opacity: 1 }, '-=0.2');

    return () => {
      headingTl.kill()
    }
  });

  return (
    <div className="news-heading heading-font-size font-helvetica uppercase">
      <div className="overflow-hidden">
        <h1 className="heading-latest opacity-0">Latest News</h1>
      </div>
      <div className="flex items-center md:gap-6 gap-1  ">
        <div className="overflow-hidden">
          <h1 className="heading-from font-albra opacity-0 mt-2">From</h1>
        </div>

        <div className="news-heading-line md:block hidden h-[1px] xl:w-[200px] md:w-[150px] bg-white origin-left opacity-0" />

        <div className="flex items-start gap-2">
          <div className="overflow-hidden">
            <h1 className="heading-world opacity-0 text-wrap">The World</h1>
          </div>

          <Image
            src={"/bitcoin-icon.svg"}
            height={24}
            width={24}
            alt="Bitcoin logo"
            className="bitcoin-logo mt-3 md:block hidden opacity-0"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsHeading;