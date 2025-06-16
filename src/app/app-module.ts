import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';
import { TermsOfService } from './terms-of-service/terms-of-service';
import { FormsModule } from '@angular/forms';

@NgModule({ 
  declarations: [
    App,
    Home,
    PrivacyPolicy,
    TermsOfService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(), 
    provideClientHydration(withEventReplay()) 
  ],
  bootstrap: [App]
})
export class AppModule { }
