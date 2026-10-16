import { ROUTE_PATHS } from '@/app/providers/routes/routePaths';

export type SidebarItemType = {
  path: string;
  title: string;
};

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: ROUTE_PATHS.HOME,
    title: 'Home',
  },
  {
    path: ROUTE_PATHS.ABOUT,
    title: 'About',
  },
  {
    path: ROUTE_PATHS.PROFILE,
    title: 'Profile',
  },
];
