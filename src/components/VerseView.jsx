import React, { useState } from 'react';

const VerseView = ({ chapter, verses, onBack }) => {
  const [activeTab, setActiveTab] = useState('translation');

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-orange-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <button onClick={onBack} className="flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            &#8592; Back to Chapters
          </button>
          <span className="opacity-80 uppercase tracking-widest text-sm font-bold">Chapter {chapter.id}</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">{chapter.sanskrit}</h1>
          <p className="text-xl text-orange-100 max-w-2xl">{chapter.translation}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="flex border-b border-gray-100">
          <button className={`flex-1 py-4 text-sm font-semibold text-center transition-colors ${activeTab === 'translation' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500 hover:text-gray-800'}`} onClick={() => setActiveTab('translation')}>Verses</button>
          <button className={`flex-1 py-4 text-sm font-semibold text-center transition-colors ${activeTab === 'summary' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500 hover:text-gray-800'}`} onClick={() => setActiveTab('summary')}>Chapter Summary</button>
        </div>
        <div className="p-8">
          {activeTab === 'summary' ? (
            <p className="text-gray-700 leading-loose text-lg font-serif">{chapter.summary}</p>
          ) : (
            <div className="divide-y divide-gray-100">
              {verses.map(verse => (
                <div key={verse.number} className="p-6 md:p-10 hover:bg-orange-50 transition-colors group">
                  <div className="flex justify-between items-start mb-6">
                    <span className="inline-block bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full">Verse {chapter.id}.{verse.number}</span>
                  </div>
                  <div className="mb-4 text-center">
                    <p className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed font-sans">{verse.sanskrit}</p>
                    <p className="text-gray-500 italic mt-4">{verse.translation}</p>
                  </div>
                  <p className="mt-3 text-lg text-gray-900 font-medium leading-relaxed">Meaning: {verse.meaning}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerseView;
