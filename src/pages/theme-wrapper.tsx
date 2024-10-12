'use client'; 

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevents hydration mismatch
  }

  return (
    <ThemeProvider defaultTheme="light" enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
}
