import React from 'react';
import { Play, SkipBack, SkipForward, Shuffle, Repeat } from 'lucide-react';

const Player = () => (
  <div className="fixed bottom-0 right-0 w-full sm:w-96 bg-red-950 p-4 rounded-tl-2xl flex flex-col sm:flex-row items-center sm:items-start sm:gap-4">

    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-800 rounded-lg mb-4 sm:mb-0" />


    <div className="flex-1 text-center sm:text-left">

      <h3 className="font-bold mb-1 text-lg">Beat It</h3>
      <p className="text-sm text-gray-400 mb-4">Michael Jackson</p>


      <div className="flex items-center justify-between mb-4">
        <span className="text-xs sm:text-sm">2:15</span>
        <div className="flex-1 mx-2 sm:mx-4 h-1 bg-gray-700 rounded-full">
          <div className="w-1/2 h-full bg-red-500 rounded-full" />
        </div>
        <span className="text-xs sm:text-sm">4:18</span>
      </div>


      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <button className="text-gray-400 hover:text-white">
          <Shuffle size={20} />
        </button>
        <button className="text-gray-400 hover:text-white">
          <SkipBack size={20} />
        </button>
        <button className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
          <Play size={20} />
        </button>
        <button className="text-gray-400 hover:text-white">
          <SkipForward size={20} />
        </button>
        <button className="text-gray-400 hover:text-white">
          <Repeat size={20} />
        </button>
      </div>
    </div>
  </div>
);

export default Player;
