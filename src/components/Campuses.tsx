import React from 'react';
import { MapPin } from 'lucide-react';

const campusData = [
  {
    id: 1,
    name: 'Campus Campinas Centro',
    address: ' Av. Dr. Moraes Salles, 884 - 1 andar - Centro, Campinas - SP, 13010-001',
    image: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Nosso campus principal, localizado no coração de Campinas, oferece infraestrutura moderna e fácil acesso por transporte público.'
  },
  {
    id: 2,
    name: 'Campus Campinas Londres',
    address: 'R. Antônio Finati Sobrinho, 41 - Jardim Londres, Campinas - SP, 13010-001',
    image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Situado na região de Barão Geraldo, nosso segundo campus em Campinas é um centro de inovação e pesquisa.'
  },
  {
    id: 3,
    name: 'Campus Hortolândia',
    address: 'Av. Joaquim Martarolli, Hortolândia - SP, 13186-624',
    image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Nosso mais novo campus, localizado em Hortolândia, foi projetado com tecnologias sustentáveis e laboratórios de última geração.'
  }
];

export const Campuses = () => {
  return (
    <section id="campus" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Nossos Campi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A Multicollege está presente em Campinas e Hortolândia, com três campi modernos e equipados para proporcionar a melhor experiência acadêmica.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {campusData.map((campus) => (
            <div 
              key={campus.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${campus.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{campus.name}</h3>
                <div className="flex items-start mb-4">
                  <MapPin className="text-blue-600 mt-1 mr-2 flex-shrink-0" size={18} />
                  <p className="text-gray-500 text-sm">{campus.address}</p>
                </div>
                <p className="text-gray-600 mb-6">{campus.description}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                  Saiba mais &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};