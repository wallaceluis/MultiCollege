import React from 'react';
import { BookOpen, Code, ShieldCheck, Database } from 'lucide-react';

const coursesData = [
  {
    id: 1,
    name: 'Análise e Desenvolvimento de Sistemas',
    icon: <Code size={24} className="text-blue-600" />,
    description: 'Aprenda a desenvolver sistemas de informação, aplicativos e plataformas digitais com foco em programação, banco de dados e metodologias ágeis.',
    duration: '2 anos e meio',
    degree: 'Tecnólogo'
  },
  {
    id: 2,
    name: 'Ciência da Computação',
    icon: <Database size={24} className="text-blue-600" />,
    description: 'Formação completa em computação com ênfase em algoritmos, estruturas de dados, inteligência artificial e fundamentos teóricos da área.',
    duration: '4 anos',
    degree: 'Bacharelado'
  },
  {
    id: 3,
    name: 'Engenharia de Software',
    icon: <BookOpen size={24} className="text-blue-600" />,
    description: 'Focado na criação e manutenção de software de qualidade, abordando processos de desenvolvimento, gerenciamento de projetos e qualidade.',
    duration: '4 anos',
    degree: 'Bacharelado'
  },
  {
    id: 4,
    name: 'Segurança da Informação',
    icon: <ShieldCheck size={24} className="text-blue-600" />,
    description: 'Especialização em proteção de dados e sistemas contra ameaças digitais, incluindo criptografia, análise de vulnerabilidades e legislação.',
    duration: '3 anos',
    degree: 'Tecnólogo'
  }
];

export const Courses = () => {
  return (
    <section id="cursos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Cursos de Graduação</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos formação de qualidade em áreas de alta demanda no mercado de tecnologia, com corpo docente altamente qualificado e infraestrutura de ponta.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coursesData.map((course) => (
            <div 
              key={course.id} 
              className="border border-gray-200 rounded-lg p-8 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="p-3 bg-blue-50 rounded-full inline-block mb-6 group-hover:bg-blue-100 transition-colors">
                {course.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                {course.name}
              </h3>
              
              <div className="flex space-x-4 mb-4">
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {course.degree}
                </span>
                <span className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                  {course.duration}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6">
                {course.description}
              </p>
              
              <div className="flex items-center justify-between">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
                  Saiba mais
                </button>
                
                <span className="text-sm text-gray-500">
                  Inscrições abertas
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Interessado em conhecer outros cursos oferecidos pela Multicollege?
          </p>
          <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-colors">
            Ver todos os cursos
          </button>
        </div>
      </div>
    </section>
  );
};