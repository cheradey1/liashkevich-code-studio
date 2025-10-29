import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D1117] border-t border-gray-800">
      <div className="container mx-auto px-6 py-6 text-center text-gray-500">
        <p>&copy; {currentYear} Liashkevich Code Studio. Всі права захищено.</p>
      </div>
    </footer>
  );
};

export default Footer;