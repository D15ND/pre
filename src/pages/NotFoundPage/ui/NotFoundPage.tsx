import { Box, Button, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import { ROUTE_PATHS } from '@/app/providers/routes/routePaths';

import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  const { t } = useTranslation('NotFoundPage');
  const navigate = useNavigate();

  return (
    <Box className={styles.notfoundpage}>
      <Box className={styles.content}>
        <Text className={styles.title}>{t('title')}</Text>
        <Button onClick={() => navigate(ROUTE_PATHS.HOME)}>{t('button')}</Button>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
