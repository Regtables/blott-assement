import BlottLogo from "@/components/BlottLogo";
import Image from "next/image";
import React from "react";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="lg:py-desktop-y py-mobile-y">
      <header className="flex justify-center mb-14 lg:mb-24">
        <BlottLogo />
      </header>

      <main>{children}</main>
    </div>
  );
};

export default PagesLayout;
