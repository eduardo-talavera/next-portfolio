'use client';


import { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from 'tropix-ui';



// Default implementation, that you can customize
export const TropixUiProvider = ({children}: { children: ReactNode } ) => {

     const [isClient, setIsClient] = useState(false);
    
      useEffect(() => {
        setIsClient(true);
      }, []);
    
      if (!isClient) return null;
 
    return <ThemeProvider>{children}</ThemeProvider>
}


