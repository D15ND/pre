import { Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import i18n from '@/shared/config/i18n/i18n';

export const LangSwitcher = () => {
  const { t } = useTranslation('Header');

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return <Button onClick={toggle}>{t('language')}</Button>;
};
