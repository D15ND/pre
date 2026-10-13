import { Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { Counter } from '@/entities/Counter';

import styles from './HomePage.module.css';

const HomePage = () => {
  const { t } = useTranslation('HomePage');

  return (
    <Box className={styles.homepage}>
      <Text>{t('title')}</Text>
      <Counter />
    </Box>
  );
};

export default HomePage;
