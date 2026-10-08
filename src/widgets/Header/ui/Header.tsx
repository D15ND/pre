import { Box, Button, IconButton } from '@chakra-ui/react';
import { useTheme } from 'next-themes';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LuMoon, LuSun } from 'react-icons/lu';

import { Logo } from '@/shared/assets';
import { ROUTE_PATHS } from '@/shared/config/navigation/routePaths';
import { Modal } from '@/shared/ui/Modal/Modal';
import { LangSwitcher } from '@/widgets/LangSwitcher';

import styles from './Header.module.css';

export const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation('Header');

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
        <LangSwitcher />
        <Button className={styles.log_btn} onClick={onToggleModal}>
          {t('login')}
        </Button>
      </Box>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt saepe unde?
        Nobis ducimus, animi repudiandae qui architecto molestiae eius dolorem voluptate neque magni
        soluta. Earum aspernatur maxime temporibus cum.
      </Modal>
    </Box>
  );
};
