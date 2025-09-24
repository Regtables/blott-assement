import Image from "next/image";
import React from "react";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="lg:py-desktop-y py-mobile-y flex flex-col items-center gap-14">
      <Image 
        src={'/blott-logo.svg'}
        height={48}
        width={200}
        alt="Blott Logo"
      />

      <div>{children}</div>
    </div>
  );
};

export default PagesLayout;
