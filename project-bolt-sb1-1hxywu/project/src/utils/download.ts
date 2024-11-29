import { toPng, toJpeg, toSvg } from 'html-to-image';
import { QRCodeDownloadOptions } from '../types/qr';

export const downloadQRCode = async (
  elementId: string,
  options: QRCodeDownloadOptions
): Promise<void> => {
  const element = document.getElementById(elementId);
  if (!element) return;

  try {
    let dataUrl: string;
    switch (options.format) {
      case 'png':
        dataUrl = await toPng(element);
        break;
      case 'jpeg':
        dataUrl = await toJpeg(element);
        break;
      case 'svg':
        dataUrl = await toSvg(element);
        break;
      default:
        dataUrl = await toPng(element);
    }

    const link = document.createElement('a');
    link.download = `${options.fileName}.${options.format}`;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('Error downloading QR code:', error);
  }
};