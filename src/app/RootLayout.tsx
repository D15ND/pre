import { Box, Spinner } from '@chakra-ui/react';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router';

import { userActions } from '../entities/User';
import { Wrapper } from '../shared/Wrapper';
import { Footer } from '../widgets/Footer';
import { Header } from '../widgets/Header';
import { Sidebar } from '../widgets/Sidebar';
import { ErrorBoundary } from './providers/ErrorBoundary';

const RootLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
};

export default RootLayout;
