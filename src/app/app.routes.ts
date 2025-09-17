import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { LegalNotice } from './subpages/legal-notice/legal-notice';

export const routes: Routes = [
    {
        path: '', 
        component: MainPage
    },
    {
        path: 'legal', 
        component: LegalNotice
    }
];
