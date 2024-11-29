import React, { useState, useCallback, useRef, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Download, Share2, RefreshCw, Command } from 'lucide-react';
import toast from 'react-hot-toast';
import { QRCodeConfig } from '../types/qr';
import { downloadQRCode } from '../utils/download';
import { shareQRCode } from '../utils/share';
import { parseCommand } from '../utils/commands';
import TemplateSelector from './TemplateSelector';
import { templates } from '../utils/templates';

const QRCodeGenerator: React.FC = () => {
  const [config, setConfig] = useState<QRCodeConfig>({
    url: 'acyberhub.com',
    size: 256,
    bgColor: '#ffffff',
    fgColor: '#000000',
    level: 'H',
    includeMargin: true,
    template: 'default'
  });

  const [command, setCommand] = useState('');
  const [logoSize, setLogoSize] = useState<number>(64);
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const template = templates.find(t => t.id === config.template);
    if (template) {
      setConfig(prev => ({
        ...prev,
        fgColor: template.color
      }));
    }
  }, [config.template]);

  const handleInputChange = (value: string) => {
    if (value.startsWith('email:') || value.startsWith('web:') || value.startsWith('business:')) {
      setCommand(value);
      const result = parseCommand(value);
      if (result) {
        setConfig(prev => ({
          ...prev,
          url: result.url,
          template: result.template.id,
          fgColor: result.template.color
        }));
        toast.success(`Template set to ${result.template.name}`);
      }
    } else {
      setCommand('');
      setConfig(prev => ({
        ...prev,
        url: value
      }));
    }
  };

  const handleDownload = useCallback(async (format: 'png' | 'jpeg' | 'svg') => {
    await downloadQRCode('qr-code', {
      format,
      fileName: `qr-code-${Date.now()}`
    });
    toast.success(`QR Code downloaded as ${format.toUpperCase()}`);
  }, []);

  const handleShare = useCallback(async () => {
    await shareQRCode(config.url, 'QR Code');
    toast.success('QR Code shared successfully!');
  }, [config.url]);

  const regenerateQR = useCallback(() => {
    setConfig(prev => ({
      ...prev,
      fgColor: '#' + Math.floor(Math.random()*16777215).toString(16)
    }));
    toast.success('QR Code regenerated with new style!');
  }, []);

  const handleTemplateSelect = (templateId: string) => {
    setConfig(prev => ({
      ...prev,
      template: templateId
    }));
    toast.success(`Template changed to ${templateId}`);
  };

  const selectedTemplate = templates.find(t => t.id === config.template);

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">QR Code Generator</h1>
            <p className="text-gray-600">Generate, customize, and share your QR codes instantly</p>
          </div>

          <div className="w-full max-w-md space-y-2">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Command size={16} />
              <span>Try commands: email:you@example.com, web:https://example.com, business:Your Company</span>
            </div>
            <input
              type="text"
              value={command || config.url}
              onChange={(e) => handleInputChange(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter URL or command (e.g., email:you@example.com)"
            />
          </div>

          <div className="w-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">Choose Template</h3>
            <TemplateSelector
              selectedTemplate={config.template}
              onSelect={handleTemplateSelect}
            />
          </div>

          <div 
            id="qr-code"
            ref={qrRef}
            className="p-6 bg-white rounded-xl shadow-lg relative"
          >
            <QRCodeCanvas
              value={config.url}
              size={config.size}
              bgColor={config.bgColor}
              fgColor={config.fgColor}
              level={config.level}
              includeMargin={config.includeMargin}
              imageSettings={selectedTemplate?.logoUrl ? {
                src: selectedTemplate.logoUrl,
                height: logoSize,
                width: logoSize,
                excavate: true,
              } : undefined}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleDownload('png')}
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download size={20} />
              <span>Download PNG</span>
            </button>
            <button
              onClick={() => handleDownload('svg')}
              className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Download size={20} />
              <span>Download SVG</span>
            </button>
            <button
              onClick={handleShare}
              className="flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Share2 size={20} />
              <span>Share</span>
            </button>
            <button
              onClick={regenerateQR}
              className="flex items-center space-x-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <RefreshCw size={20} />
              <span>Regenerate</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;