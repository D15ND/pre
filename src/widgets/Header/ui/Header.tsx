import { Box, Button, IconButton } from '@chakra-ui/react';
import { useTheme } from 'next-themes';
import { useCallback, useState } from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';

import { Logo } from '@/shared/assets';
import { ROUTE_PATHS } from '@/shared/config/navigation/routePaths';
import { Modal } from '@/shared/ui/Modal/Modal';

import styles from './Header.module.css';

const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

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
        <Button onClick={onToggleModal}>LogIn</Button>
      </Box>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt saepe unde?
        Nobis ducimus, animi repudiandae qui architecto molestiae eius dolorem voluptate neque magni
        soluta. Earum aspernatur maxime temporibus cum.
      </Modal>
    </Box>
  );
};

export default Header;
