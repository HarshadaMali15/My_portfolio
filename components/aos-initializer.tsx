'use client';

import { useEffect } from 'react';

export default function AosInitializer() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.default.init({
          duration: 800,
          easing: 'ease-in-out',
          once: false,
        });
      });
    }
  }, []);

  return null;
}
