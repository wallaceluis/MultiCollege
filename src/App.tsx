import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Campuses } from './components/Campuses';
import { Courses } from './components/Courses';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Campuses />
        <Courses />
      </main>
      <Footer />
    </div>
  );
}

export default App;