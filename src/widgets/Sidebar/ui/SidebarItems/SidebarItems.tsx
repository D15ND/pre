import { Box } from '@chakra-ui/react';
import { memo } from 'react';
import { Link } from 'react-router';

import type { SidebarItemType } from '../../model/items';
import styles from './SidebarItems.module.css';

type SidebarItemTypeProps = {
  item: SidebarItemType;
};

export const SidebarItems = memo(({ item }: SidebarItemTypeProps) => {
  return (
    <Box className={styles.sidebar_items}>
      <Link to={item.path}>{item.title}</Link>
    </Box>
  );
});
