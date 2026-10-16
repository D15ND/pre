import { Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import styles from './ProfilePage.module.css';
// import { profileReducer } from '@/entities/Profile';

const ProfilePage = () => {
  const { t } = useTranslation('ProfilePage');

  // const reducers = {
  //   profile: profileReducer,
  // }

  return (
    <Box className={styles.profilepage}>
      <Text className={styles.title}>{t('title')}</Text>
    </Box>
  );
};

export default ProfilePage;
