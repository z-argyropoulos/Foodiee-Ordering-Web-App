import { useEffect, useState, ReactNode } from 'react';
import { Box } from '@mui/material';

export default function ClientOnly({
  children,
  ...rest
}: {
  children: ReactNode;
}) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <Box {...rest}>{children}</Box>;
}
