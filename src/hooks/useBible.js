import { useEffect } from 'react';

export default function useBible() {
  let bible = null;
  let chapter = null;

  useEffect(() => {
    bible = localStorage.getItem('bible') || '1';
    chapter = localStorage.getItem('chapter') || '1';
  });

  return { bible, chapter };
}
