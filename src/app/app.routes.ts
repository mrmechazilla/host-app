import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'feature',
      loadChildren: () =>
        loadRemoteModule({
          type: 'manifest',
          remoteName: 'remote-mfe',
          exposedModule: './feature',
        })
        .then(m => {
          console.log('Loaded remote module keys:', Object.keys(m));
          return m.featureRoutes;
        })
        .catch(err => {
          console.error('Failed loading remote:', err);
          // return an unavailable component
          throw err;
        })
    }
];
