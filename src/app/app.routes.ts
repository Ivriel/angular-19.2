import { Routes } from '@angular/router';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { HomeComponent } from './components/home/home.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { SignalComponent } from './components/signal/signal.component';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';

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
    },
    {
        path:'signal',
        component:SignalComponent
    },
    {
        path:'linkedsignal',
        component:LinkedSignalComponent
    },
    {
        path:'templateform',
        component:TemplateFormComponent
    }
];
