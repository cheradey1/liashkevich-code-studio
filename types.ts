export interface Project {
  youtubeId?: string;
  image?: string;
  logo?: string;
  category: 'Game' | 'Blender' | 'Web' | 'SAAS';
  title: string;
  description: string;
  link: string;
  price: string;
  storeLink?: string;
}
