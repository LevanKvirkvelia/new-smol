import React from 'react';
import MarqueeTop from '../components/MarqueeTop';
import MarqueeBottom from '../components/MarqueeBottom';

const Home: React.FC = () => {
  return (
    <div className="font-comicSans text-gray-800 bg-white min-h-screen">
      <MarqueeTop />
      <main className="p-4">
        {/* Content goes here */}
      </main>
      <MarqueeBottom />
    </div>
  );
};

export default Home;