import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ChapterCard from './components/ChapterCard';
import VerseView from './components/VerseView';
import Footer from './components/Footer';

import { CHAPTERS_DATA } from './data/chapters';
import { SAMPLE_VERSES } from './data/verses';

function App() {
  const [view, setView] = useState('home'); // 'home', 'chapters', 'verse'
  const [selectedChapterId, setSelectedChapterId] = useState(null);

  const handleChapterClick = (id) => {
    setSelectedChapterId(id);
    setView('verse');
    window.scrollTo(0, 0);
  };

  const handleMoodClick = (chapterId) => {
    setSelectedChapterId(chapterId);
    setView('verse');
    window.scrollTo(0, 0);
  };

  const selectedChapter = CHAPTERS_DATA.find(ch => ch.id === selectedChapterId);
  const verses = selectedChapterId ? SAMPLE_VERSES[selectedChapterId] || [] : [];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header setView={setView} />
      <main>
        {view === 'home' && (
          <Hero onReadClick={handleChapterClick} onMoodClick={handleMoodClick} />
        )}
        {view === 'chapters' && (
          <section className="container mx-auto px-4 py-20 grid md:grid-cols-3 gap-8">
            {CHAPTERS_DATA.map(chapter => (
              <ChapterCard key={chapter.id} chapter={chapter} onClick={handleChapterClick} />
            ))}
          </section>
        )}
        {view === 'verse' && selectedChapter && (
          <VerseView chapter={selectedChapter} verses={verses} onBack={() => setView('chapters')} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
