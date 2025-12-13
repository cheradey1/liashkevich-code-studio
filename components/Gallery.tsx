import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

const projects: Project[] = [
  {
    youtubeId: 'gRlvKwIRg_c',
    category: 'Web',
    title: 'Прогноз погоди',
    description: 'PWA додаток для перегляду прогнозу погоди з реал-тайм оновленнями. Интуитивний інтерфейс, детальна інформація та графіки змін температури.',
    link: 'https://www.youtube.com/watch?v=gRlvKwIRg_c'
  },
  {
    youtubeId: 'uJBFhDgoimg',
    category: 'Web',
    title: 'Biometric',
    description: 'PWA додаток для біометричної ідентифікації та аутентифікації. Сучасна безпека з використанням відбитків пальців та розпізнавання обличчя.',
    link: 'https://www.youtube.com/watch?v=uJBFhDgoimg'
  },
  {
    youtubeId: 'hVV4ivbTXZc',
    category: 'Web',
    title: 'Калькулятор Святості',
    description: 'PWA додаток для розрахунку святості та духовних показників. Інтуїтивний інтерфейс з офлайн-режимом та персоналізованою аналітикою.',
    link: 'https://www.youtube.com/watch?v=hVV4ivbTXZc'
  },
  {
    youtubeId: 'lwbHuVSJnQI',
    category: 'Web',
    title: 'Pizza',
    description: 'Веб-додаток для замовлення та управління піцерією. Сучасний UI, реал-тайм оновлення та мобільна оптимізація.',
    link: 'https://www.youtube.com/watch?v=lwbHuVSJnQI'
  },
  {
    youtubeId: 'r49AysKIsUo',
    category: 'Web',
    title: 'Калькулятор Активи і Пасиви',
    description: 'PWA додаток для розрахунку та аналізу активів і пасивів. Простий інтерфейс, миттєві розрахунки та можливість зберігання даних офлайн для фінансового планування.',
    link: 'https://www.youtube.com/watch?v=r49AysKIsUo',
    storeLink: 'https://aktivy-ta-pasivy.vercel.app/'
  },
  {
    youtubeId: 'tl4FERI_-rI',
    category: 'Web',
    title: 'Sos-Love',
    description: 'Інноваційна платформа для знайомств з інтелектуальним підбором партнерів. Сучасний інтерфейс, безпека користувачів та персоналізовані рекомендації для пошуку ідеального матчу.',
    link: 'https://www.youtube.com/watch?v=tl4FERI_-rI',
    storeLink: 'https://sos-love.vercel.app/'
  },
  {
    youtubeId: 'Iqqj_t9SsAo',
    category: 'SAAS',
    title: 'PatentDoc Designer',
    description: 'SAAS для створення технічної документації та креслень для патентів: генерує професійні креслення, специфікації та пакети документів, експортує в PDF/SVG і полегшує підготовку патентної заяви.',
    link: 'https://www.youtube.com/watch?v=Iqqj_t9SsAo'
  },
  {
    youtubeId: 'O00lV9zAobs',
    category: 'Blender',
    title: '2D Special Effects for Blender',
    description: 'Набір 2D спецефектів для Blender 3D: шейдери, спрайти та інструменти для швидкого створення візуальних ефектів у 2D/2.5D проєктах.',
    link: 'https://www.youtube.com/watch?v=O00lV9zAobs'
  },
  {
    youtubeId: 'YBd9DVmcF6k',
    category: 'SAAS',
    title: 'AI Business Assistant Dashboard',
    description: 'Сучасний SAAS-додаток для створення професійного шорт‑сценарію для творців контенту в YouTube та TikTok. Створює три варіанти сценарію, прогнозує за тригерами, на якій секунді може відбутися втрата глядача, генерує таблицю з аналітикою та дає поради, як покращити відео.',
    link: 'https://youtu.be/YBd9DVmcF6k'
  },
  {
    youtubeId: 'w-lcAH8vxno',
    category: 'Web',
    title: 'Chat GPT Powered Business Assistant',
    description: 'Інноваційний бізнес-асистент на базі Chat GPT, що допомагає автоматизувати рутинні завдання та підвищити продуктивність.',
    link: 'https://www.youtube.com/watch?v=w-lcAH8vxno'
  },
  {
    youtubeId: 'X_jwVzjRXSM',
    category: 'Web',
    title: 'Прогноз здоров\'я',
    description: 'PWA додаток для моніторингу та прогнозування стану здоров\'я. Детальна демонстрація доступна на YouTube.',
    link: 'https://www.youtube.com/watch?v=X_jwVzjRXSM'
  }
];

const Gallery: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-2">Галерея проектів</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Веб-додатки, PWA, ігри та інструменти, які я створив. Кожен проект — це поєднання сучасного коду, адаптивного дизайну та фокусу на User Experience.
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