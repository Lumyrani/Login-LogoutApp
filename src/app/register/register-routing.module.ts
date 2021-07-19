import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import {HomeComponent} from './home/home.component'
import {LogoutComponent} from './logout/logout.component'
import {AuthGuardService} from './auth-guard.service'


const routes: Routes = [{ path: '', component: RegisterComponent },
{path:'home',component: HomeComponent,
canActivate:[AuthGuardService]
},
{path:'logout',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
