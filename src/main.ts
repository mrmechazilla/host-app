import './styles.scss';
import { loadManifest } from '@angular-architects/module-federation';

loadManifest("mf.manifest.json")
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));