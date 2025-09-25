"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const BlottLogo = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!logoRef.current) return;

      gsap.set(logoRef.current, {
        rotationX: -180,
        opacity: 0,
        scale: 0.9,
      });

      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(logoRef.current, {
        rotationX: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
        transformOrigin: "center center",
        transformPerspective: 1200,
      });

      const logo = logoRef.current;
      let isAnimating = false;

      logo.addEventListener("mouseenter", () => {
        if (isAnimating) return;
        isAnimating = true;
        
        gsap.to(logo, {
          rotationX: 360,
          duration: 0.8,
          ease: "power2.inOut",
          transformOrigin: "center center",
          transformPerspective: 1200,
          onComplete: () => {
            isAnimating = false;
          }
        });
      });

      logo.addEventListener("mouseleave", () => {
        gsap.to(logo, {
          rotationX: 0,
          duration: 0.6,
          ease: "power2.out",
          transformOrigin: "center center",
          transformPerspective: 1200,
        });
      });

      return () => {
        tl.kill();
      };
    },
    { scope: logoRef }
  );

  return (
    <div
      ref={logoRef}
      className="inline-block cursor-pointer"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <Image
        src="/blott-logo.svg"
        height={48}
        width={200}
        alt="Blott Logo"
        className="block"
      />
    </div>
  );
};

export default BlottLogo;