import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

const projects: Project[] = [
  {
    youtubeId: 'hVV4ivbTXZc',
    category: 'Web',
    title: 'Калькулятор Святості',
    description: 'PWA додаток для розрахунку святості та духовних показників. Інтуїтивний інтерфейс з офлайн-режимом та персоналізованою аналітикою.',
    link: 'https://www.youtube.com/watch?v=hVV4ivbTXZc',
    price: 'Free'
  },
  {
    youtubeId: 'lwbHuVSJnQI',
    category: 'Web',
    title: 'Pizza',
    description: 'Веб-додаток для замовлення та управління піцерею. Сучасний UI, реал-тайм оновлення та мобільна оптимізація.',
    link: 'https://www.youtube.com/watch?v=lwbHuVSJnQI',
    price: 'Free'
  },
  {
    youtubeId: 'r49AysKIsUo',
    category: 'Web',
    title: 'Калькулятор Активи і Пасиви',
    description: 'PWA додаток для розрахунку та аналізу активів і пасивів. Простий інтерфейс, миттєві розрахунки та можливість зберігання даних офлайн для фінансового планування.',
    link: 'https://www.youtube.com/watch?v=r49AysKIsUo',
    price: 'Free',
    storeLink: 'https://aktivy-ta-pasivy.vercel.app/'
  },
  {
    youtubeId: 'tl4FERI_-rI',
    category: 'Web',
    title: 'Sos-Love',
    description: 'Інноваційна платформа для знайомств з інтелектуальним підбором партнерів. Сучасний інтерфейс, безпека користувачів та персоналізовані рекомендації для пошуку ідеального матчу.',
    link: 'https://www.youtube.com/watch?v=tl4FERI_-rI',
    price: 'Free',
    storeLink: 'https://sos-love.vercel.app/'
  },
  {
    youtubeId: 'Iqqj_t9SsAo',
    category: 'SAAS',
    title: 'PatentDoc Designer',
    description: 'SAAS для створення технічної документації та креслень для патентів: генерує професійні креслення, специфікації та пакети документів, експортує в PDF/SVG і полегшує підготовку патентної заяви.',
    link: 'https://www.youtube.com/watch?v=Iqqj_t9SsAo',
    price: 'From $49/mo'
  },
  {
    youtubeId: 'O00lV9zAobs',
    category: 'Blender',
    title: '2D Special Effects for Blender',
    description: 'Набір 2D спецефектів для Blender 3D: шейдери, спрайти та інструменти для швидкого створення візуальних ефектів у 2D/2.5D проєктах.',
    link: 'https://www.youtube.com/watch?v=O00lV9zAobs',
    price: 'Free'
  },
  {
    youtubeId: 'YBd9DVmcF6k',
    category: 'SAAS',
    title: 'AI Business Assistant Dashboard',
    description: 'Сучасний SAAS-додаток для створення професійного шорт‑сценарію для творців контенту в YouTube та TikTok. Створює три варіанти сценарію, прогнозує за тригерами, на якій секунді може відбутися втрата глядача, генерує таблицю з аналітикою та дає поради, як покращити відео.',
    link: 'https://youtu.be/YBd9DVmcF6k',
    price: 'From $29/mo'
  },
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