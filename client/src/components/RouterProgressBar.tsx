import NextNProgress from 'nextjs-progressbar';
import { progressBarColor } from '@themes/muiTheme';

const RouterProgressBar = () => {
  return <NextNProgress color={progressBarColor} />;
};

export default RouterProgressBar;
