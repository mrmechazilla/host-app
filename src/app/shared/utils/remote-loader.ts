/* import { loadRemoteModule } from "@angular-architects/module-federation";
import { RemoteConfig } from "../../core/models/remote-config";

export function loadFallback() {
  return import('../unavailable/unavailable.routes')
    .then(m => m.routes);
}

export const manifest =  import('../../../../public/mf.manifest.json');

export function loadRemoteFeature(name: string) {
  const config = manifest[name];

  return loadRemoteModule({
    type: 'manifest',
    remoteName: name,
    exposedModule: config.exposedModule
  })
    .then(remote => {
      switch (config.type) {
        case 'module':  return remote[config.ngModuleName];
        case 'routes':  return remote.routes;
        default: throw new Error(`Unknown MFE integration type for ${name}`);
      }
    })
    .catch(loadFallback);
}
 */