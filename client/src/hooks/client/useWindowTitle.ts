import { useLayoutEffect } from 'react';

const fallbackTitle =
  'Foodiee - Order from multiple restaurants at the same time';

const useWindowTitle = (title: string) => {
  useLayoutEffect(() => {
    document.title = title ? `${title} - Foodiee` : fallbackTitle;

    // reset on unmount
    return () => {
      document.title = fallbackTitle;
    };
  }, [title]);
};

export { useWindowTitle };
