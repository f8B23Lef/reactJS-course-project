import { useEffect, useState, useRef } from 'react';

const useHover = () => {
  const ref = useRef(null);
  const [isHovered, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        node.removeEventListener('mouseenter', handleMouseEnter);
        node.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
    return undefined;
  }, []);

  return [ref, isHovered];
};

export default useHover;
