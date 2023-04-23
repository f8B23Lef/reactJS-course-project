import { useEffect } from 'react';

const useOutsideClick = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(event);
      }
    };

    document.body.addEventListener('click', listener);

    return () => document.body.removeEventListener('click', listener);
  }, [ref, handler]);
};

export default useOutsideClick;
