import { useLayoutEffect } from 'react';

const useScrollToTop = () => {
  useLayoutEffect(() => {
    console.log('scroll to top');
    window.scrollTo({
      top: 0,
    });
  }, []);
};

export { useScrollToTop };
