import React from 'react';
import { Project } from '../types';
import { DownloadIcon } from './icons';

interface ProjectCardProps {
  project: Project;
}

const categoryColors = {
  Game: 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white',
  Blender: 'bg-gradient-to-r from-orange-500 to-amber-500 text-white',
  Web: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white',
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { youtubeId, image, logo, category, title, description, link, price, storeLink } = project;

  return (
    <div className="bg-[#161B22] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-[#00BFFF]/20 flex flex-col border border-gray-700/50">
      <div className="relative">
        {youtubeId ? (
          <div className="relative w-full aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        ) : (
          <img src={image} alt={title} className="w-full h-48 object-cover" />
        )}
        <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[category]}`}>
          {category}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm flex-grow mb-4">{description}</p>
        <div className="flex justify-between items-center mt-auto">
          {storeLink && (
            <a
              href={storeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center font-semibold py-2 px-4 rounded-md transition-colors duration-300 ${
                link.includes('play.google.com') 
                  ? 'bg-[#00875F] hover:bg-[#006B4C] text-white' 
                  : 'bg-[#FF90E8] hover:bg-[#FF73E3] text-black'
              }`}
            >
              {link.includes('play.google.com') ? 'Google Play' : 'PLAY'}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;