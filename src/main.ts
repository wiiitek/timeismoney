import { enableProdMode, importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { RateService } from './app/rate/rate-service';
import { App } from './app/app';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule),
    RateService
  ]
})
  .catch(err => console.error(err));
