import RootLayout from '@/app/RootLayout';
import { AboutPage } from '@/pages/AboutPage';
import { HomePage } from '@/pages/HomePage';
import { ROUTE_PATHS } from '@/shared/config/navigation/routePaths';

export const appRoutes = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <p>ErrorBoundary</p>,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTE_PATHS.ABOUT, element: <AboutPage /> },
      { path: ROUTE_PATHS.NOT_FOUND, element: <p>notfound page</p> },
    ],
  },
];
