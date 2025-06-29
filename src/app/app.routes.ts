import { Routes } from '@angular/router';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { HomeComponent } from './components/home/home.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { SignalComponent } from './components/signal/signal.component';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { GetApiComponent } from './components/API/get-api/get-api.component';
import { PostApiComponent } from './components/API/post-api/post-api.component';
import { ResourceApiComponent } from './components/resource-api/resource-api.component';
import { CustomerComponent } from './components/API/customer/customer.component';
import { LifeCycleComponent } from './components/API/life-cycle/life-cycle.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './guard/auth.guard';
import { NgTempNgContainerComponent } from './components/ng-temp-ng-container/ng-temp-ng-container.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'login'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        // canActivate:[authGuard],
        children:[ // komponen yang akan diakses setelah login
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
                path:'ng-if',
                component:NgIfComponent
            },
            {
                path:'ng-for',
                component:NgForComponent
            },
            {
                path:'ng-style',
                component:NgStyleComponent
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
            },
            {
                path:'reactiveform',
                component:ReactiveFormComponent
            },
            {
                path:'get-api',
                component:GetApiComponent
            },
            {
                path:'post-api',
                component:PostApiComponent
            },
            {
                path:'resource-api',
                component:ResourceApiComponent
            },
            {
                path:'customer',
                component:CustomerComponent
            },
            {
                path:'lifeCycle',
                component:LifeCycleComponent
            },
            {
                path:'admin',
                component:AdminComponent
            },
            {
                path:'ngcontainer',
                component:NgTempNgContainerComponent
            }
        ]
    }
];
