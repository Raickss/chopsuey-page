import { Routes } from '@angular/router';
import { Layout } from './layout/layout/layout';
import { NEGOCIO } from './shared/business';

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
        path: 'privacidad',
        loadComponent: () => import('./pages/privacidad/privacidad').then((m) => m.Privacidad),
      },
    ],
  },
  // Los QR impresos apuntan a /menu: se reenvían a la carta en izzypos.
  {
    path: 'menu',
    canActivate: [
      () => {
        window.location.replace(NEGOCIO.cartaUrl);
        return false;
      },
    ],
    children: [],
  },
  { path: '**', redirectTo: '' },
];
