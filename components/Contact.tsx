import React, { useState } from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from './icons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(formData.name && formData.email && formData.message) {
      // Simulate form submission
      setStatus('Успіх! Дякую за ваше повідомлення.');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } else {
      setStatus('Будь ласка, заповніть усі поля.');
       setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-2">Зв'яжіться з нами</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Маєте запитання, пропозицію по проекту чи просто хочете привітатися? Не соромтеся писати.
        </p>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="md:w-1/3">
            <h3 className="text-2xl font-bold text-white mb-6">Контакти</h3>
            <div className="flex items-center space-x-4 mb-4">
              <MailIcon className="h-6 w-6 text-[#00FFFF]" />
              <a href="mailto:andriy.liashkevich@gmail.com" className="text-gray-300 hover:text-[#00FFFF]">andriy.liashkevich@gmail.com</a>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-[#00FFFF] transition-colors"><TwitterIcon className="h-8 w-8" /></a>
              <a href="https://github.com/cheradey1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FFFF] transition-colors"><GithubIcon className="h-8 w-8" /></a>
              <a href="#" className="text-gray-400 hover:text-[#00FFFF] transition-colors"><LinkedinIcon className="h-8 w-8" /></a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Ім'я</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="w-full bg-[#0D1117] border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00BFFF]" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Електронна пошта</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="w-full bg-[#0D1117] border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00BFFF]" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Повідомлення</label>
                <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} className="w-full bg-[#0D1117] border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button type="submit" className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-2 px-6 rounded-md transition duration-300 hover:bg-white/20 hover:shadow-lg hover:shadow-[#00BFFF]/50">
                  Надіслати повідомлення
                </button>
                {status && <p className={`text-sm ${status.includes('Успіх') ? 'text-green-400' : 'text-red-400'}`}>{status}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;