import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = async () => {

  const auth = inject(AuthService);

  const router = inject(Router);

  const logged = await auth.waitForAuth();

  if (logged) {
    return true;
  }

  return router.createUrlTree(['/admin/login']);

};