export interface QRCodeConfig {
  url: string;
  size: number;
  bgColor: string;
  fgColor: string;
  level: 'L' | 'M' | 'Q' | 'H';
  includeMargin: boolean;
  template?: string;
  command?: string;
}

export interface QRCodeDownloadOptions {
  format: 'png' | 'jpeg' | 'svg';
  fileName: string;
}

export interface Template {
  id: string;
  name: string;
  icon: string;
  color: string;
  logoUrl: string;
  prefix?: string;
}

export interface CommandTemplate {
  type: string;
  pattern: RegExp;
  template: Template;
}