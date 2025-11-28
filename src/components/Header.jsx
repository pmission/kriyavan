import React from 'react';
import { Search, Menu } from 'lucide-react';

const Header = ({ setView }) => (
  <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-100 shadow-sm">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setView('home')}>
        <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform"></div>
        <span className="font-serif text-xl font-bold text-gray-900 tracking-tight">Gita Wisdom</span>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        <button onClick={() => setView('home')} className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Home</button>
        <button onClick={() => setView('chapters')} className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Chapters</button>
        <button className="text-gray-600 hover:text-orange-600 font-medium transition-colors">About</button>
      </nav>
      
      <div className="flex items-center gap-3">
        <button className="p-2 text-gray-600 hover:bg-orange-50 rounded-full transition-colors">
          <Search size={20} />
        </button>
        <button className="md:hidden p-2 text-gray-600">
          <Menu size={20} />
        </button>
      </div>
    </div>
  </header>
);

export default Header;
