import { Box, Button, IconButton } from '@chakra-ui/react';
import { useTheme } from 'next-themes';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LuMoon, LuSun } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';

import { getUserAuthData, userActions } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { Logo } from '@/shared/assets';
import { ROUTE_PATHS } from '@/shared/config/navigation/routePaths';
import { LangSwitcher } from '@/widgets/LangSwitcher';

import styles from './Header.module.css';

export const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation('Header');
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isDark = resolvedTheme === 'dark';

  if (authData) {
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
          <Button className={styles.log_btn} onClick={onLogout}>
            {t('logout')}
          </Button>
        </Box>
      </Box>
    );
  }

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
        <Button className={styles.log_btn} onClick={onShowModal}>
          {t('login')}
        </Button>
      </Box>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </Box>
  );
};
