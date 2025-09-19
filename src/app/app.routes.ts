import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { LegalNotice } from './subpages/legal-notice/legal-notice';
import { PrivacyPolicy } from './subpages/privacy-policy/privacy-policy';

export const routes: Routes = [
    {
        path: '', 
        component: MainPage
    },
    {
        path: 'legal', 
        component: LegalNotice
    },
    {
        path: 'privacy-policy',
        component: PrivacyPolicy
    }
]