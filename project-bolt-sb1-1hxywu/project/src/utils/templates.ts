import { Template, CommandTemplate } from '../types/qr';

export const templates: Template[] = [
  {
    id: 'default',
    name: 'Default',
    icon: 'Globe',
    color: '#000000',
    logoUrl: ''
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: 'Facebook',
    color: '#1877F2',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: 'Instagram',
    color: '#E4405F',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png'
  },
  {
    id: 'twitter',
    name: 'Twitter',
    icon: 'Twitter',
    color: '#1DA1F2',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: 'Linkedin',
    color: '#0A66C2',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png'
  },
  {
    id: 'gmail',
    name: 'Gmail',
    icon: 'Mail',
    color: '#EA4335',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png',
    prefix: 'mailto:'
  },
  {
    id: 'yahoo',
    name: 'Yahoo Mail',
    icon: 'Mail',
    color: '#6001D2',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Yahoo_Mail_icon_%282013-2019%29.svg/512px-Yahoo_Mail_icon_%282013-2019%29.svg.png',
    prefix: 'mailto:'
  },
  {
    id: 'business',
    name: 'Business',
    icon: 'Briefcase',
    color: '#0F172A',
    logoUrl: ''
  },
  {
    id: 'website',
    name: 'Website',
    icon: 'Globe2',
    color: '#2563EB',
    logoUrl: ''
  }
];

export const commandTemplates: CommandTemplate[] = [
  {
    type: 'email',
    pattern: /^email:(\S+@\S+\.\S+)$/i,
    template: {
      id: 'email',
      name: 'Email',
      icon: 'Mail',
      color: '#EA4335',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png',
      prefix: 'mailto:'
    }
  },
  {
    type: 'website',
    pattern: /^web:(https?:\/\/\S+)$/i,
    template: {
      id: 'website',
      name: 'Website',
      icon: 'Globe2',
      color: '#2563EB',
      logoUrl: ''
    }
  },
  {
    type: 'business',
    pattern: /^business:(.+)$/i,
    template: {
      id: 'business',
      name: 'Business',
      icon: 'Briefcase',
      color: '#0F172A',
      logoUrl: ''
    }
  }
];