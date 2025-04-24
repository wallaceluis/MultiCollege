import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="inicio" className="relative pt-16 pb-32 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900 to-teal-900"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-12">
        <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Construa seu futuro na<br />
            <span className="text-blue-300">Multicollege</span>
          </h1>
          
          <p className="text-xl text-gray-100 mb-8 max-w-xl mx-auto md:mx-0">
            Educação de qualidade, inovação e excelência acadêmica para formar os profissionais do amanhã.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors shadow-lg"
              onClick={() => scrollToSection('cursos')}
            >
              Conheça nossos cursos
            </button>
            <button 
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition-colors shadow-lg"
              onClick={() => scrollToSection('campus')}
            >
              Visite nossos campi
            </button>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={() => scrollToSection('campus')}
      >
        <ChevronDown size={32} className="text-white" />
      </div>
    </section>
  );
};