export  const runActionByScroll =(scrollSizeTrigger: number, callback: (scroll: number) => void) =>  {
    window.addEventListener('scroll', () => {
      const scroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (scroll > scrollSizeTrigger) callback(scroll);
    }) 
  }