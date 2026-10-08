import { Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import styles from './AboutPage.module.css';

const AboutPage = () => {
  const { t } = useTranslation('AboutPage');

  return (
    <Box className={styles.aboutpage}>
      <Text>{t('title')}</Text>
    </Box>
  );
};

export default AboutPage;
