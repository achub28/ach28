import React from 'react';
import { templates } from '../utils/templates';
import { Facebook, Instagram, Twitter, Linkedin, Globe, Mail, Briefcase, Globe2 } from 'lucide-react';

interface TemplateSelectorProps {
  selectedTemplate: string;
  onSelect: (templateId: string) => void;
}

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Globe,
  Mail,
  Briefcase,
  Globe2
};

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ selectedTemplate, onSelect }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full max-w-2xl mx-auto">
      {templates.map((template) => {
        const Icon = iconMap[template.icon];
        return (
          <button
            key={template.id}
            onClick={() => onSelect(template.id)}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedTemplate === template.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-200'
            }`}
          >
            <div className="flex flex-col items-center space-y-2">
              <Icon className="w-8 h-8" style={{ color: template.color }} />
              <span className="text-sm font-medium text-gray-700">{template.name}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default TemplateSelector;