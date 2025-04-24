import React from 'react';
import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contato" className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap size={32} className="text-blue-300 mr-2" />
              <span className="text-xl font-bold">Multicollege</span>
            </div>
            <p className="text-blue-200 mb-6">
              Educação de qualidade para formar os profissionais do futuro em tecnologia e inovação.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Cursos</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Vestibular</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Notícias</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Eventos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Informações</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Calendário Acadêmico</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Bolsas e Financiamentos</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Biblioteca</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Portal do Aluno</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Ouvidoria</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Phone size={20} className="text-blue-300 mr-3 flex-shrink-0" />
                <span>(19) 3555-1000</span>
              </li>
              <li className="flex">
                <Mail size={20} className="text-blue-300 mr-3 flex-shrink-0" />
                <span>contato@multicollege.edu.br</span>
              </li>
              <li className="flex">
                <MapPin size={20} className="text-blue-300 mr-3 flex-shrink-0" />
                <span>Polo Campinas Centro - Av. Dr. Moraes Salles, 884 - 1 andar - Centro, Campinas - SP, 13010-001</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 mt-8 text-center text-blue-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Multicollege. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};