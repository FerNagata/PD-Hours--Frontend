import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SquadDataComponent } from './components/squad-data/squad-data.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
    }, 
    {
        path: 'squad-data',
        component: SquadDataComponent,
    }, 
];
