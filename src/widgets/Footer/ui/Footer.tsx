import { Box, Text } from '@chakra-ui/react';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <Box as="footer" className={styles.footer}>
      <Text className={styles.info}>2026 all rights reserved</Text>
    </Box>
  );
};

export default Footer;
