import '@/shared/config/i18n/i18n';
import './styles/index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import { RouterProvider } from 'react-router';

import { system } from '@/shared/config';

import { router } from './providers/routes';
import { StoreProvider } from './providers/StoreProvider';

function App() {
  return (
    <StoreProvider>
      <ThemeProvider attribute="class">
        <ChakraProvider value={system}>
          <RouterProvider router={router} />
        </ChakraProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
