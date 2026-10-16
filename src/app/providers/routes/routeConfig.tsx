import { ROUTE_PATHS } from '@/app/providers/routes/routePaths';
import RootLayout from '@/app/RootLayout';
import { AboutPage } from '@/pages/AboutPage';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';

export const appRoutes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTE_PATHS.ABOUT, element: <AboutPage /> },
      { path: ROUTE_PATHS.PROFILE, element: <ProfilePage /> },
      { path: ROUTE_PATHS.NOT_FOUND, element: <NotFoundPage /> },
    ],
  },
];
