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
        redirectTo: 'landing',
        pathMatch: 'full',
      },
      {
        path: 'landing',
        loadChildren: () =>
          import('./modules/landing/landing.module').then(
            (m) => m.LandingModule
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'landing',
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
