import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { UnavailableComponent } from './components/unavailable/unavailable.component';

export const routes: Routes = [
    {
      path: '',
      loadChildren: () =>
        loadRemoteModule({
          type: 'manifest',
          remoteName: 'users-mfe',
          exposedModule: './users',
        })
        .then(m => m.usersRoutes)
        //.catch(() => import('./components/unavailable/unavailable.component').then(m => m.UnavailableComponent))
        //.catch(() => [
        //  { path: '', redirectTo: '/unavailable', pathMatch: 'full' }
        //]),
    },
    {
      path: 'unavailable',
      component: UnavailableComponent
    }
];
