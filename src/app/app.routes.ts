import { Routes } from '@angular/router';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { HomeComponent } from './components/home/home.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'home'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'dataBinding',
        component:DataBindingComponent
    },
    {
        path:'ng-class',
        component:NgClassComponent
    },
    {
        path:'control-flow',
        component:ControlStatementComponent
    }
];
