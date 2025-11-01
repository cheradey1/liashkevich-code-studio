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
            <h2 className="text-4xl font-bold text-white mb-4">Про студію</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
             <b>Liashkevich Code Studio</b> — незалежна студія розробки веб-додатків, сайтів і AI-інструментів нового покоління. Ми створюємо інтелектуальні PWA-рішення, які працюють швидко, автономно та виглядають сучасно на будь-якому пристрої.
            </p>
            <p className="text-gray-400 mb-10 leading-relaxed">
             Ми поєднуємо код, дизайн і штучний інтелект, щоб створювати рішення, які не просто працюють — вони розуміють користувача. Наша спеціалізація включає AI-асистентів, прогнозні системи, PWA-сайти з адаптивним дизайном, інтеграції з API та UX-оптимізацію.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;