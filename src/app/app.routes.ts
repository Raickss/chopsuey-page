import { Routes } from '@angular/router';
import { Layout } from './layout/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then((m) => m.Home),
      },
      {
        path: 'menu',
        loadComponent: () => import('./pages/menu/menu').then((m) => m.Menu),
      },
      {
        path: 'privacidad',
        loadComponent: () => import('./pages/privacidad/privacidad').then((m) => m.Privacidad),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
