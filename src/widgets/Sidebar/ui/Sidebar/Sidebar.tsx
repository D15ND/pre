import { Box } from '@chakra-ui/react';
import { memo } from 'react';

import { SidebarItemsList } from '../../model/items';
import { SidebarItems } from '../SidebarItems/SidebarItems';
import styles from './Sidebar.module.css';

export const Sidebar = memo(() => {
  return (
    <Box className={styles.sidebar}>
      {SidebarItemsList.map((item) => (
        <SidebarItems item={item} key={item.title} />
      ))}
    </Box>
  );
});
