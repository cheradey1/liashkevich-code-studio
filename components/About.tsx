import React from 'react';

const profileImage = '/images/3.png';

const About: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 lg:w-2/5">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8A2BE2] to-[#00BFFF] rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <img src={profileImage} alt="Andriy Liashkevich" 
                className="relative rounded-lg shadow-lg w-full" 
              />
            </div>
          </div>
          <div className="md:w-1/2 lg:w-3/5">
            <h2 className="text-4xl font-bold text-white mb-6">Про мене</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Я Frontend Developer, спеціалізуюся на створенні SaaS-інтерфейсів, MVP та PWA-додатків.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Моя задача — не просто «зверстати сайт», а зробити зручний продукт, який:
            </p>
            <ul className="text-gray-400 mb-6 space-y-2 leading-relaxed">
              <li>• швидко запускається</li>
              <li>• коректно працює на мобільних пристроях</li>
              <li>• виглядає як повноцінний застосунок</li>
              <li>• готовий до масштабування</li>
            </ul>
            <p className="text-gray-400 leading-relaxed">
              Працюю як з проєктами з нуля, так і з копіями / редизайном існуючих сайтів, перетворюючи їх у сучасні PWA-додатки.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;