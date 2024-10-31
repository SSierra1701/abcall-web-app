import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { PqrUserComponent } from './app/user/pqr/components/pqr-view/pqr-user.component';
import { CreatePqrComponent } from './app/user/pqr/components/create-pqr/create-pqr.component';
import { HomeUserComponent } from './app/user/home-user/components/home/homeUser.component';
import { provideRouter } from '@angular/router';

const routes = [
  {
    path: 'home-user',
    component: HomeUserComponent,
    children: [
      { path: 'create-pqr', component: CreatePqrComponent },
      { path: 'pqr', component: PqrUserComponent },
    ],
  },
];

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideRouter(routes),
    ...appConfig.providers, // Mantiene los proveedores ya definidos en appConfig
  ],
}).catch((err) => console.error(err));