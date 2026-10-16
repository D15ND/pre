import { IconButton } from '@chakra-ui/react';
import { useTheme } from 'next-themes';
import { LuMoon, LuSun } from 'react-icons/lu';

export const ThemeSwitcher = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const isDark = resolvedTheme === 'dark';

  return (
    <IconButton variant="ghost" onClick={() => setTheme(isDark ? 'light' : 'dark')}>
      {isDark ? <LuSun /> : <LuMoon />}
    </IconButton>
  );
};
