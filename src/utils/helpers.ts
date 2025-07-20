export  const runActionByScroll =(scrollSizeTrigger: number, callback: (scroll: number) => void) =>  {
    window.addEventListener('scroll', () => {
      const scroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (scroll > scrollSizeTrigger) callback(scroll);
    }) 
  }

interface DownloadOptions {
  fileURL: string;
  fileName: string;
}

export const downloadFromUrl = ({ fileURL, fileName }: DownloadOptions): void => {
  const link = document.createElement('a');
  link.href = fileURL;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}  