import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

const projects: Project[] = [
  {
    youtubeId: 'w-lcAH8vxno',
    category: 'Web',
    title: 'Chat GPT Powered Business Assistant',
    description: 'Інноваційний бізнес-асистент на базі Chat GPT, що допомагає автоматизувати рутинні завдання та підвищити продуктивність.',
    link: 'https://www.youtube.com/watch?v=w-lcAH8vxno',
    price: 'Free'
  },
  {
    youtubeId: 'eNKnBF07Uew',
    category: 'Blender',
    title: 'Special Effects in Blender Addon',
    description: 'Потужний аддон для Blender, що дозволяє створювати вражаючі спецефекти. Доступний для придбання на Gumroad.',
    link: 'https://www.youtube.com/watch?v=eNKnBF07Uew',
    price: '$2.00',
    storeLink: 'https://liashkevich.gumroad.com/l/ybjap'
  },
  {
    youtubeId: 'XaVl2--xbN8',
    category: 'Game',
    title: 'You Shall Not Pass',
    description: 'Захоплююча мобільна гра, де ви повинні захищати свою територію від ворогів. Завантажуйте з Google Play!',
    link: 'https://www.youtube.com/watch?v=XaVl2--xbN8',
    price: 'Free',
    storeLink: 'https://play.google.com/store/apps/details?id=com.DONTPUSHTHEHORSESGAMESTUDIOS.YouShallNotPass'
  },
  {
    youtubeId: 'X_jwVzjRXSM',
    category: 'Web',
    title: 'Прогноз здоров\'я',
    description: 'PWA додаток для моніторингу та прогнозування стану здоров\'я. Детальна демонстрація доступна на YouTube.',
    link: 'https://www.youtube.com/watch?v=X_jwVzjRXSM',
    price: 'Free'
  }
];

const Gallery: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-2">Галерея проектів</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Ознайомтеся з нашими AI-рішеннями, веб-додатками та PWA-сайтами. Кожен проект — це поєднання інноваційного коду, дизайну та штучного інтелекту.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;