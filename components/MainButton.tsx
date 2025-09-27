import Image from "next/image";
import React, { useState } from "react";

type MainButtonProps = {
  url: string;
  headline: string;
  text?: string
};

const MainButton = ({ url, headline, text = 'Read Article' }: MainButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      className="flex h-30 gap-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label={`Read full article: ${headline}`}
      type="button"
    >
      <div className="relative pb-[7px] overflow-hidden">
        <span className="relative z-10 capitalize">{text}</span>
        
        <div className={`absolute bottom-0 left-0 h-px w-full bg-white origin-right transition-transform duration-300 ease-in-out ${
          isHovered ? 'scale-x-0' : 'scale-x-100'
        }`} />
        
        <div className={`absolute bottom-0 left-0 h-px w-full bg-white origin-left transition-transform duration-300 ease-in-out ${
          isHovered ? 'scale-x-100 delay-150' : 'scale-x-0'
        }`} />
      </div>

      <Image 
        src={'/circle-arrow-right-up.svg'}
        height={24}
        width={24}
        alt = 'Circle Arrow Right Up Icon'
        className={`transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}
      />
    </button>
  );
};

export default MainButton;