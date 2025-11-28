import React from 'react';
import { ArrowRight } from 'lucide-react';

const ChapterCard = ({ chapter, onClick }) => (
  <div onClick={() => onClick(chapter.id)} className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all cursor-pointer relative overflow-hidden">
    <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500 ease-out"></div>
    <div className="relative z-10">
      <span className="text-orange-600 font-bold text-xs tracking-wider uppercase mb-2 block">Chapter {chapter.id}</span>
      <h3 className="font-serif text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-700 transition-colors">{chapter.sanskrit}</h3>
      <p className="text-sm text-gray-500 font-medium italic mb-4">{chapter.translation}</p>
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">{chapter.summary}</p>
      <div className="flex items-center text-orange-600 text-sm font-bold group-hover:translate-x-2 transition-transform">
        Read Chapter <ArrowRight size={16} className="ml-1" />
      </div>
    </div>
  </div>
);

export default ChapterCard;
