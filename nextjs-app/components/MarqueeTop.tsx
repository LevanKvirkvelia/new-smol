import React from 'react';

const MarqueeTop: React.FC = () => {
  return (
    <div className="bg-white text-black font-sans">
      <marquee className="animate-marquee">
        This is the top marquee
      </marquee>
    </div>
  );
};

export default MarqueeTop;