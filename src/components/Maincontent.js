import React from 'react';
import { Search } from 'lucide-react';

const MainContent = () => {
  const songs = [
    { id: 1, title: "Billie Jean", plays: "1,040,811,084", time: "4:53", album: "Thriller 25 Sup..." },
    { id: 2, title: "Beat It", plays: "643,786,045", time: "4:18", album: "Thriller 25 Sup..." },
    { id: 3, title: "Smooth Criminal - 2012 Rema...", plays: "407,234,004", time: "4:17", album: "Thriller 25 Sup..." },
    { id: 4, title: "Don't Stop 'Til You Get Enough", plays: "316,391,952", time: "6:05", album: "Bad 25th Anni..." },
    { id: 5, title: "Rock With You - Single Version", plays: "268,187,218", time: "3:40", album: "Off The Wall" }
  ];

  return (
    <div className="flex-1 bg-gradient-to-br from-red-950 to-black p-4 sm:p-8">

      <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
        <div className="flex gap-4 sm:gap-8">
          {['Music', 'Podcast', 'Live', 'Radio'].map(item => (
            <button key={item} className="text-sm sm:text-base text-gray-300 hover:text-white">{item}</button>
          ))}
        </div>
        <div className="flex items-center gap-2 bg-black/30 rounded-full px-3 sm:px-4 py-2 w-full sm:w-auto">
          <Search size={20} />
          <input
            type="text"
            placeholder="Michael Jackson"
            className="bg-transparent border-none outline-none w-full sm:w-auto text-sm sm:text-base"
          />
        </div>
      </div>


      <div className="relative rounded-2xl overflow-hidden mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
        <div className="relative z-20 p-4 sm:p-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Verified Artist</div>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">Michael Jackson</h1>
          <p className="text-sm sm:text-base text-gray-300">27,852,501 monthly listeners</p>
        </div>
      </div>


      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-xl font-bold">Popular</h2>
          <button className="text-sm sm:text-base text-gray-300 hover:text-white">See All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm sm:text-base">
            <thead>
              <tr className="text-gray-400">
                <th className="text-left py-2">#</th>
                <th className="text-left py-2">TITLE</th>
                <th className="text-left py-2">PLAYING</th>
                <th className="text-left py-2">TIME</th>
                <th className="text-left py-2">ALBUM</th>
              </tr>
            </thead>
            <tbody>
              {songs.map((song) => (
                <tr key={song.id} className="hover:bg-white/10">
                  <td className="py-2">{song.id}</td>
                  <td className="py-2 flex items-center gap-2">
                    <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded" />
                    {song.title}
                  </td>
                  <td className="py-2">{song.plays}</td>
                  <td className="py-2">{song.time}</td>
                  <td className="py-2">{song.album}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
