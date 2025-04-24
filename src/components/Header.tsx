import React, { useState, useEffect } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <GraduationCap size={32} className="text-blue-700 mr-2" />
          <span className="text-xl font-bold text-blue-900">Multicollege</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#inicio" className="text-gray-700 hover:text-blue-700 transition-colors">Início</a>
          <a href="#campus" className="text-gray-700 hover:text-blue-700 transition-colors">Campi</a>
          <a href="#cursos" className="text-gray-700 hover:text-blue-700 transition-colors">Cursos</a>
          <a href="#contato" className="text-gray-700 hover:text-blue-700 transition-colors">Contato</a>
        </nav>
        
        <button className="hidden md:block bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md transition-colors">
          Inscreva-se
        </button>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#inicio" 
              className="text-gray-700 hover:text-blue-700 transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Início
            </a>
            <a 
              href="#campus" 
              className="text-gray-700 hover:text-blue-700 transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Campi
            </a>
            <a 
              href="#cursos" 
              className="text-gray-700 hover:text-blue-700 transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Cursos
            </a>
            <a 
              href="#contato" 
              className="text-gray-700 hover:text-blue-700 transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </a>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md transition-colors w-full">
              Inscreva-se
            </button>
          </div>
        </div>
      )}
    </header>
  );
};