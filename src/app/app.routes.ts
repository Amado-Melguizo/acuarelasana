import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Gallery } from './pages/gallery/gallery';
import { Contact } from './pages/contact/contact';
import { Services } from './pages/services/services';
import { NotFound } from './pages/not-found/not-found';
import { Dashboard } from './features/admin/pages/dashboard/dashboard';
import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },

  {
    path: 'about',
    component: About,
  },

  {
    path: 'gallery/:category',
    component: Gallery,
  },

  {
    path: 'services',
    component: Services,
  },

  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'admin',
    component: Dashboard,
    canActivate: [authGuard],
  },
  {
    path: 'admin/login',
    loadComponent: () => import('./features/admin/pages/login/login').then((c) => c.Login),

    canActivate: [guestGuard],
  },
  {
    path: '**',
    component: NotFound,
  },
];
