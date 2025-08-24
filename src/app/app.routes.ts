import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'remotes',
      loadComponent: () =>
        loadRemoteModule({
          type: 'manifest',
          remoteName: 'remote-mfe',
          exposedModule: './Component',
        })
        .then(m => {
          console.log('Loaded remote module keys:', Object.keys(m));
          return m.UsersComponent; // or RemoteEntryComponent if you switch later
        })
        .catch(err => {
          console.error('Failed loading remote:', err);
          // return BusinessErrorComponent; // your fallback if you have one
          throw err;
        })
    }
];
