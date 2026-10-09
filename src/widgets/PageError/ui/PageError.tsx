import { Box, Button, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import styles from './PageError.module.css';

export const PageError = () => {
  const { t } = useTranslation('PageError');

  const reloadPage = () => {
    location.reload();
  };

  return (
    <Box className={styles.pageerror}>
      <Box className={styles.container}>
        <Text>{t('title')}</Text>
        <Button className={styles.button} onClick={reloadPage}>
          {t('button')}
        </Button>
      </Box>
    </Box>
  );
};
