import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ReservasComponent } from './reservas/reservas.component';
import { MedicosComponent } from './medicos/medicos.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';

const routes: Routes = [
  { path: '', redirectTo:'inicio', pathMatch:'full'}, 
  { path: 'inicio', component: InicioComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'medicos', component: MedicosComponent },
  { path: 'especialidades', component: EspecialidadesComponent }
];

@NgModule({  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
