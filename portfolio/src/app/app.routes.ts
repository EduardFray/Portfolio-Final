import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPolicyComponent } from './shared/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    {path: '', component: MainContentComponent},
    {path: 'Policy', component: PrivacyPolicyComponent}
];
