import { ROUTE_PATHS } from './routePaths';

export const appRoutes = [
  {
    path: '/',
    element: <p>RootLayout</p>,
    errorElement: <p>ErrorBoundary</p>,
    children: [
      { index: true, element: <p>HomePage</p> },
      { path: ROUTE_PATHS.ABOUT, element: <p>AboutPage</p> },
      { path: ROUTE_PATHS.NOT_FOUND, element: <p>notfound page</p> },
    ],
  },
];
