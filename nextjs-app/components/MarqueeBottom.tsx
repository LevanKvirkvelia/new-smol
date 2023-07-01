import React from 'react';

const MarqueeBottom: React.FC = () => {
  return (
    <div className="fixed bottom-0 w-full bg-white text-black text-center py-3">
      <marquee className="text-2xl font-comic-sans">
        This is an animated marquee at the bottom of the page.
      </marquee>
    </div>
  );
};

export default MarqueeBottom;