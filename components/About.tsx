import React from 'react';

const profileImage = '/images/1.png';

const About: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 lg:w-2/5">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00CED1] to-[#00BFFF] rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <img src={profileImage} alt="Andriy Liashkevich" 
                className="relative rounded-lg shadow-lg w-full" 
              />
            </div>
          </div>
          <div className="md:w-1/2 lg:w-3/5">
            <h2 className="text-4xl font-bold text-white mb-6">👨‍💻 Ляшкевич Андрій</h2>
            <p className="text-gray-400 mb-6 leading-relaxed text-xl">
              Створюю MVP та SaaS-додатки, які запускаються швидко, виглядають як мобільні апки та допомагають бізнесу заробляти вже з перших користувачів.
            </p>
            
            <h3 className="text-lg font-bold text-white mb-3">🚀 Основні напрямки</h3>
            <ul className="text-gray-400 mb-6 space-y-2 leading-relaxed">
              <li>• SaaS платформи</li>
              <li>• MVP стартапи (за 3–14 днів)</li>
              <li>• PWA (веб як мобільний додаток)</li>
              <li>• Веб-додатки для бізнесу</li>
              <li>• Прототипи для інвесторів</li>
              <li>• Інтерфейси для AI та автоматизації</li>
            </ul>

            <h3 className="text-lg font-bold text-white mb-3">🎮 Game Development (MVP)</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Створюю прості ігрові MVP та прототипи для перевірки ідей: базова механіка, UI/UX, демо для інвесторів або тесту ринку. <span className="text-[#00FFFF]">Не роблю дорогі AAA-ігри — тільки швидкі та ефективні MVP.</span>
            </p>

            <h3 className="text-lg font-bold text-white mb-3">💰 Перевага по ціні</h3>
            <p className="text-gray-400 mb-2 leading-relaxed">
              <span className="text-[#00FFFF] font-bold">👉 у 2 рази дешевше, ніж середній ринок</span>
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              за рахунок: швидкої розробки • фокусу на MVP • використання готових рішень
            </p>

            <h3 className="text-lg font-bold text-white mb-3">⚡ Підхід до роботи</h3>
            <ul className="text-gray-400 mb-6 space-y-2 leading-relaxed text-sm">
              <li>✓ швидкий запуск (без "перфекціонізму на старті")</li>
              <li>✓ фокус на результат (користувачі / продажі)</li>
              <li>✓ мінімальні витрати клієнта</li>
              <li>✓ готовність до масштабування</li>
            </ul>

            <h3 className="text-lg font-bold text-white mb-3">🧠 Додатково</h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              3D та візуалізація (Blender) • прототипи hardware/стартапів • створення демо відео для продуктів • інтеграція AI
            </p>

            <h3 className="text-lg font-bold text-white mb-3">🎯 Ціль</h3>
            <p className="text-gray-400 leading-relaxed">
              <span className="text-[#FF90E8] font-bold">Допомогти запустити продукт максимально швидко і дешево, щоб він почав приносити гроші або залучив інвестиції.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;