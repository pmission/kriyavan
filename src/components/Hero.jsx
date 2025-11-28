import React from 'react';
import { BookOpen } from 'lucide-react';
import { MOODS } from '../data/moods';

const Hero = ({ onReadClick, onMoodClick }) => (
  <section className="relative bg-orange-50 py-20 lg:py-32 overflow-hidden">
    <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
      <span className="text-orange-600 font-bold tracking-widest text-sm uppercase mb-4 block animate-fade-in">The Song of God</span>
      <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
        Timeless Wisdom for <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Modern Questions</span>
      </h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
        Explore the divine conversation between Krishna and Arjuna. Discover your duty, find your peace, and understand the purpose of existence.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
        <button onClick={() => onReadClick(1)} className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all shadow-lg flex items-center gap-2">
          <BookOpen size={20} /> Read Chapter 1
        </button>
        <button className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-semibold hover:border-orange-300 hover:bg-orange-50 transition-all">
          Verse of the Day
        </button>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-orange-100 max-w-3xl mx-auto">
        <h3 className="text-lg font-serif font-semibold text-gray-800 mb-4">What are you seeking today?</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {MOODS.map((mood, idx) => (
            <button key={idx} onClick={() => onMoodClick(mood.target)} className={`${mood.color} px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity`}>
              I feel {mood.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
