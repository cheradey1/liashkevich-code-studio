import React from 'react';
import { GithubIcon, GumroadIcon, PlayStoreIcon } from './icons';

const DownloadLink: React.FC<{ href: string; icon: React.ReactNode; label: string; platform: string }> = ({ href, icon, label, platform }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group bg-[#161B22] rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2 hover:bg-[#21262d] hover:shadow-2xl hover:shadow-[#8A2BE2]/20 border border-gray-700/50"
    >
      <div className="mb-4 text-[#00FFFF] group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{label}</h3>
      <p className="text-gray-400">Find my projects on {platform}</p>
    </a>
);

const Downloads: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-2">Завантаження</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Отримайте доступ до моїх інструментів, ассетів та вихідного коду на цих платформах.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DownloadLink 
                href="https://liashkevich.gumroad.com/" 
                icon={<GumroadIcon className="w-16 h-16" />}
                label="Gumroad"
                platform="Gumroad"
            />
            <DownloadLink 
                href="https://github.com/cheradey1" 
                icon={<GithubIcon className="w-16 h-16" />}
                label="GitHub"
                platform="GitHub"
            />
            <DownloadLink 
                href="#" 
                icon={<PlayStoreIcon className="w-16 h-16" />}
                label="Play Market"
                platform="Google Play"
            />
        </div>
      </div>
    </section>
  );
};

export default Downloads;