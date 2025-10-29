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

            <div className="mt-10 border-t border-gray-800 pt-10">
              <h3 className="text-3xl font-bold text-white mb-4">💰 Ціни на розробку</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                  Liashkevich Code Studio пропонує повний цикл створення сучасних веб-рішень, PWA-додатків, аддонів і мобільних ігор. Ми працюємо прозоро, а вартість залежить від складності проєкту.
              </p>

              <div className="space-y-8">
                  <div className="p-6 bg-[#161B22]/50 rounded-lg border border-gray-700/50">
                      <h4 className="text-xl font-semibold text-white mb-2">🌐 PWA-додатки та сайти</h4>
                      <p className="text-gray-400 mb-3 text-sm">Веб-додатки, що працюють як мобільні — швидко, автономно і з push-сповіщеннями.</p>
                      <ul className="list-disc list-inside text-gray-400 space-y-1">
                          <li><span className="font-semibold text-gray-300">Від $3 000</span> — базовий функціонал</li>
                          <li><span className="font-semibold text-gray-300">$10 000–25 000</span> — розширені інтеграції та AI-функції</li>
                      </ul>
                  </div>
                  
                  <div className="p-6 bg-[#161B22]/50 rounded-lg border border-gray-700/50">
                      <h4 className="text-xl font-semibold text-white mb-2">🧩 Blender Add-ons</h4>
                      <p className="text-gray-400 mb-3 text-sm">Інструменти для 3D-митців і VFX-розробників.</p>
                      <ul className="list-disc list-inside text-gray-400 space-y-1">
                          <li><span className="font-semibold text-gray-300">Від $500</span> — простий аддон</li>
                          <li><span className="font-semibold text-gray-300">До $3 000+</span> — професійні рішення з UI та AI-ефектами</li>
                      </ul>
                  </div>

                  <div className="p-6 bg-[#161B22]/50 rounded-lg border border-gray-700/50">
                      <h4 className="text-xl font-semibold text-white mb-2">🎮 Мобільні ігри та додатки</h4>
                      <p className="text-gray-400 mb-3 text-sm">Unity- або PWA-ігри, креативні програми, інтерактивні рішення.</p>
                      <ul className="list-disc list-inside text-gray-400 space-y-1">
                          <li><span className="font-semibold text-gray-300">$20 000–50 000</span> — 2D / невеликий 3D-проєкт</li>
                          <li><span className="font-semibold text-gray-300">$50 000+</span> — середні і великі ігри з мультиплеєром</li>
                      </ul>
                  </div>
                  
                  <div className="p-6 bg-[#161B22]/50 rounded-lg border border-gray-700/50">
                      <h4 className="text-xl font-semibold text-white mb-2">⚙️ Годинна ставка</h4>
                      <p className="text-gray-400 mb-3 text-sm">Для індивідуальних проєктів</p>
                      <ul className="list-disc list-inside text-gray-400 space-y-1">
                          <li><span className="font-semibold text-gray-300">$30–50 / год</span> — розробка, дизайн, інтеграції</li>
                      </ul>
                  </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;