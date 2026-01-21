export interface RemoteConfig {
  remoteEntry: string;
  exposedModule: string;
  exportName: string;
  type: 'module' | 'routes' | 'component';

  displayName: string;
  routePath: string;
}