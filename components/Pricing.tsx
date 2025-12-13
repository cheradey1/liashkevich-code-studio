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
      category: '💻 Frontend / PWA',
      items: [
        {
          title: 'Landing / портфоліо',
          price: '$100–200',
          description: 'Швидкий лендінг з адаптивним дизайном'
        },
        {
          title: 'Корпоративний сайт / блог',
          price: '$200–400',
          description: 'Багатосторінковий сайт з CMS'
        },
        {
          title: 'PWA-додаток',
          price: '$400–600',
          description: 'Із офлайн-режимом, push-сповіщеннями'
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#0D1117]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-2">Послуги та ціни</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Гнучкі ціни та індивідуальний підхід до кожного проекту
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
            <p className="text-gray-400 mt-2">(Frontend, UI, PWA, інтеграції)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;