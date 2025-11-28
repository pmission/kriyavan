import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6 text-white">
            <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center font-bold"></div>
            <span className="font-serif text-xl font-bold">Gita Wisdom</span>
          </div>
          <p className="text-gray-400 leading-relaxed max-w-sm mb-6">
            A digital sanctuary for the timeless wisdom of the Bhagavad Gita. Designed to help you navigate life's complexities with clarity and peace.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-orange-400 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">All Chapters</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">Verse of the Day</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Daily Wisdom</h4>
          <p className="text-sm text-gray-400 mb-4">Get a shloka delivered to your inbox every morning.</p>
          <form className="flex flex-col gap-2">
            <input type="email" placeholder="Your email" className="bg-gray-800 border-none rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-orange-600" />
            <button className="bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700 transition-colors">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500">
        2024 Gita Wisdom. Made with devotion.
      </div>
    </div>
  </footer>
);

export default Footer;
