import { Box, Button, Input, Text } from '@chakra-ui/react';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.css';

const LoginForm = memo(() => {
  const { t } = useTranslation('LoginForm');
  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const onChangeUserName = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserName(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(() => {
    //@ts-expect-error - types for dispatch
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <Box className={styles.loginform}>
      <Text className={styles.title}>{t('title')}</Text>
      {error && <Text className={styles.error_msg}>{error}</Text>}
      <Input
        placeholder={t('username_placeholder')}
        onChange={(e) => onChangeUserName(e.target.value)}
        value={username}
      />
      <Input
        placeholder={t('userpassword_placeholder')}
        onChange={(e) => onChangePassword(e.target.value)}
        value={password}
      />
      <Button className={styles.button} onClick={onLoginClick} disabled={isLoading}>
        {t('submit')}
      </Button>
    </Box>
  );
});

export default LoginForm;
