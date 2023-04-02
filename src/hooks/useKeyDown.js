import { useEffect } from 'react';

const useKeyDown = (key, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (event.key === key) {
        handler(event);
      }
    };

    document.body.addEventListener('keydown', listener);

    return () => document.body.removeEventListener('keydown', listener);
  }, []);
};

export default useKeyDown;
