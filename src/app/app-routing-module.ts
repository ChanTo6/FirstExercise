import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';
import { TermsOfService } from './terms-of-service/terms-of-service';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'privacy-policy', component: PrivacyPolicy },
  { path: 'terms-of-service', component: TermsOfService }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
