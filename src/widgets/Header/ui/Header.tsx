import { Box, Button, IconButton } from '@chakra-ui/react';
import { useTheme } from 'next-themes';
import { LuMoon, LuSun } from 'react-icons/lu';

import { Logo } from '@/shared/assets';
import { ROUTE_PATHS } from '@/shared/config/navigation/routePaths';

import styles from './Header.module.css';

const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const isDark = resolvedTheme === 'dark';

  return (
    <Box as="header" className={styles.header}>
      <a href={ROUTE_PATHS.HOME} className={styles.logo}>
        <Logo />
      </a>
      <Box className={styles.settings}>
        <IconButton variant="ghost" onClick={() => setTheme(isDark ? 'light' : 'dark')}>
          {isDark ? <LuSun /> : <LuMoon />}
        </IconButton>
        <Button>en</Button>
        <Button>LogIn</Button>
      </Box>
    </Box>
  );
};

export default Header;
