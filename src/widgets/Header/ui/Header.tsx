import { Box, Button } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { ROUTE_PATHS } from '@/app/providers/routes/routePaths';
import { getUserAuthData, userActions } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { Logo } from '@/shared/assets';
import { LangSwitcher } from '@/widgets/LangSwitcher';

import { ThemeSwitcher } from '../../ThemeSwitcher';
import styles from './Header.module.css';

export const Header = () => {
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

  if (authData) {
    return (
      <Box as="header" className={styles.header}>
        <a href={ROUTE_PATHS.HOME} className={styles.logo}>
          <Logo />
        </a>
        <Box className={styles.settings}>
          <ThemeSwitcher />
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
        <ThemeSwitcher />
        <LangSwitcher />
        <Button className={styles.log_btn} onClick={onShowModal}>
          {t('login')}
        </Button>
      </Box>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </Box>
  );
};
