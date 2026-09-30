import { Box, Spinner } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { Wrapper } from '../shared/Wrapper';
import { Footer } from '../widgets/Footer';
import { Header } from '../widgets/Header';
import { Sidebar } from '../widgets/Sidebar';

const RootLayout = () => {
  return (
    <Box className="app">
      <Header />
      <Wrapper>
        <Sidebar />
        <Box as="main" className="pages">
          <Suspense fallback={<Spinner size="lg" className="spin_fallback" />}>
            <Outlet />
          </Suspense>
        </Box>
      </Wrapper>
      <Footer />
    </Box>
  );
};

export default RootLayout;
