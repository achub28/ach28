import { CommandTemplate } from '../types/qr';
import { commandTemplates } from './templates';

export const parseCommand = (input: string): { url: string; template: CommandTemplate['template'] } | null => {
  for (const commandTemplate of commandTemplates) {
    const match = input.match(commandTemplate.pattern);
    if (match) {
      const value = match[1];
      const url = commandTemplate.template.prefix ? 
        `${commandTemplate.template.prefix}${value}` : 
        value;
      
      return {
        url,
        template: commandTemplate.template
      };
    }
  }
  return null;
};