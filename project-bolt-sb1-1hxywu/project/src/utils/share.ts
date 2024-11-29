export const shareQRCode = async (url: string, title: string): Promise<void> => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: title,
        text: 'Check out this QR Code!',
        url: url
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  } else {
    await navigator.clipboard.writeText(url);
  }
};