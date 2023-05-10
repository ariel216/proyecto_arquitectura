import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutappComponent } from './layouts/layoutapp/layoutapp.component';
import { LayoutloginComponent } from './layouts/layoutlogin/layoutlogin.component';

const routes: Routes = [
  {path:'', redirectTo:'citas', pathMatch:'full'},  
  {
    path:'',
    component:LayoutloginComponent,
    children:[
      { 
        path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule),      
      }
    ]
  },
  {
    path:'',
    component:LayoutappComponent,
    children:[
      { 
        path: 'citas', loadChildren: () => import('./citas/citas.module').then(m => m.CitasModule),      
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
