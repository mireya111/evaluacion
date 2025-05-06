import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { IonicModule } from '@ionic/angular';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      IonicModule.forRoot(),
      FormsModule,
      ReactiveFormsModule
    ),
    provideRouter(routes),
  ],
});
