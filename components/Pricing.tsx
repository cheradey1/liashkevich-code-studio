import React from 'react';

interface PriceRange {
  category: string;
  items: {
    title: string;
    price: string;
    description: string;
  }[];
}

const Pricing: React.FC = () => {
  const priceRanges: PriceRange[] = [
    {
      category: '💻 Вебсайти та PWA-додатки',
      items: [
        {
          title: 'Лендінг або портфоліо',
          price: '$200–400',
          description: 'Landing Page з адаптивним дизайном'
        },
        {
          title: 'Корпоративний сайт / блог',
          price: '$400–800',
          description: 'Адаптивний дизайн, багатосторінковий'
        },
        {
          title: 'PWA-додаток',
          price: '$800–1 500',
          description: 'Із офлайн-режимом, push і базовим AI'
        }
      ]
    },
    {
      category: '🧠 AI-додатки та асистенти',
      items: [
        {
          title: 'Чат-бот або простий AI-помічник',
          price: '$300–700',
          description: 'Базова AI-інтеграція та функціонал'
        },
        {
          title: 'Інтелектуальна аналітика / прогноз',
          price: '$700–1 500',
          description: 'Аналітичні інструменти та прогнозування'
        },
        {
          title: 'Повноцінний AI-асистент',
          price: '$1 500–3 000',
          description: 'З навчанням і API'
        }
      ]
    },
    {
      category: '🎨 Blender Add-ons',
      items: [
        {
          title: 'Базовий скрипт або тул',
          price: '$100–250',
          description: 'Простий інструмент для Blender'
        },
        {
          title: 'Аддон з UI та анімацією',
          price: '$250–600',
          description: 'З інтерфейсом, анімацією або пресетами'
        },
        {
          title: 'AI/VFX-аддон',
          price: '$600–1 000+',
          description: 'Професійний рівень з розширеним функціоналом'
        }
      ]
    },
    {
      category: '🎮 Мобільні ігри (Unity / PWA)',
      items: [
        {
          title: 'Проста 2D-гра',
          price: '$700–1 500',
          description: 'Базовий геймплей та механіки'
        },
        {
          title: '3D або казуальна гра',
          price: '$1 500–3 000',
          description: 'Інтерактивна гра з розширеним функціоналом'
        },
        {
          title: 'Комплексна гра',
          price: '$3 000+',
          description: 'З AI, внутрішньою економікою чи мультиплеєром'
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#0D1117]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-2">Прайс-лист</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Ми пропонуємо гнучкі ціни та індивідуальний підхід до кожного проекту
        </p>
        <div className="grid gap-12">
          {priceRanges.map((range, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">{range.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {range.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-[#161B22] p-6 rounded-lg border border-gray-700/50 hover:border-[#00BFFF]/50 transition-colors"
                  >
                    <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-3xl font-bold text-[#00FFFF] mb-4">{item.price}</p>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="mt-12 p-6 bg-[#161B22] rounded-lg border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">⚙️ Годинна ставка</h3>
            <p className="text-3xl font-bold text-[#00FFFF]">$15–25 / год</p>
            <p className="text-gray-400 mt-2">Розробка, дизайн, AI-інтеграції</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;