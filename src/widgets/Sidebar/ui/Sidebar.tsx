import { Box } from '@chakra-ui/react';
import { Link } from 'react-router';

import { Navigation } from '@/shared/config';

import styles from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <Box className={styles.sidebar}>
      {Navigation.map(({ title, path }) => (
        <Link key={title} to={path}>
          {title}
        </Link>
      ))}
    </Box>
  );
};
