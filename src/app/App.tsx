import '@/shared/config/i18n/i18n';
import './styles/index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';

import { system } from '@/shared/config';

import { router } from './providers/routes';
import { store } from './providers/store/ui/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <ChakraProvider value={system}>
          <RouterProvider router={router} />
        </ChakraProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
