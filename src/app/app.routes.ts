import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { LegalNotice } from './subpages/legal-notice/legal-notice';
import { PrivacyPolicy } from './subpages/privacy-policy/privacy-policy';
import { ProjectPage } from './subpages/project-page/project-page';

export const routes: Routes = [
    {
        path: '', 
        component: MainPage
    },
    {
        path: 'projects',
        component: ProjectPage
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