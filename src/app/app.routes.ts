import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

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
        .catch(() => console.log("service unavailable"))
    }
];
