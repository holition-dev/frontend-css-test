import { NgModule } from '@angular/core';
import {
  ExtraOptions,
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'test',
        pathMatch: 'full',
      },
      {
        path: 'landing',
        loadChildren: () =>
          import('./modules/landing/landing.module').then(
            (m) => m.LandingModule
          ),
      },
      {
        path: 'test',
        loadChildren: () =>
          import('./modules/test/test.module').then((m) => m.TestModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'test',
  },
];

const config: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  useHash: true,
  enableTracing: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
