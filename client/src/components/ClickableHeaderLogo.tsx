import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Scooter from '../../public/icons/scooter.svg';

interface IHeaderProps {
  href: string;
}

const ClickableHeaderLogo = forwardRef<
  HTMLAnchorElement,
  IHeaderProps
>(({ href }, ref) => {
  return (
    <a href={href} ref={ref}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          allignCenter: 'center',
        }}>
        <Image
          src={Scooter}
          alt="Foodie Logo"
          width={25}
          height={25}
        />
        <Typography variant="h6" sx={{ ml: 1 }}>
          Foodiee
        </Typography>
      </Box>
    </a>
  );
});

ClickableHeaderLogo.displayName = 'ClickableHeaderLogo';

export default ClickableHeaderLogo;
