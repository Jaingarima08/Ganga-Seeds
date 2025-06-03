import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="flex items-center space-x-2 cursor-pointer"
      onClick={handleScrollToTop}
    >
      <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full border">
        <FaArrowUp className="" />
      </div>
    </div>
  );
};

export default BackToTop;
