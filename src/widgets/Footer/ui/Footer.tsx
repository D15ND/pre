import { Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import styles from './Footer.module.css';

const Footer = () => {
  const { t } = useTranslation('Footer');

  return (
    <Box as="footer" className={styles.footer}>
      <Text className={styles.info}>2026 {t('title')}</Text>
    </Box>
  );
};

export default Footer;
