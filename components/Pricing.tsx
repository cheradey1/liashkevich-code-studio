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
      category: '💰 MVP / Startup Launch',
      items: [
        {
          title: 'Starter MVP',
          price: '$300 – $600',
          description: '1 сторінка або простий веб-додаток • базовий UI • швидкий запуск (3–5 днів)'
        },
        {
          title: 'Pro MVP',
          price: '$600 – $1200',
          description: '3–7 сторінок • авторизація / логіка • адаптивність (mobile + desktop) • підготовка під SaaS'
        },
        {
          title: 'SaaS / Advanced MVP',
          price: '$1200 – $2500',
          description: 'повноцінний веб-додаток • складна логіка • інтеграції (API, AI) • готовність до масштабування'
        }
      ]
    },
    {
      category: '🎮 Game MVP (Unity)',
      items: [
        {
          title: 'Game Prototype',
          price: '$300 – $800',
          description: 'базова механіка гри • UI • демо для тесту ідеї або інвесторів'
        }
      ]
    },
    {
      category: '🎬 Додатково',
      items: [
        {
          title: 'Demo Video / Presentation',
          price: '$100 – $300',
          description: 'відео для стартапу • презентація продукту • 3D / UI'
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#001a3d]">
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
                    className="bg-[#0f2d47] p-6 rounded-lg border border-gray-700/50 hover:border-[#00CED1]/50 transition-colors"
                  >
                    <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-3xl font-bold text-[#00FFFF] mb-4">{item.price}</p>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="mt-12 p-6 bg-[#0f2d47] rounded-lg border border-gray-700/50">
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