import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicosComponent } from './medicos/medicos.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { ReservasComponent } from './reservas/reservas.component';
import { InicioComponent } from './inicio/inicio.component';
import { CitasRoutingModule } from './citas-routing.module';

@NgModule({
  declarations: [    
    MedicosComponent,
    EspecialidadesComponent,
    ReservasComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule
  ]
})
export class CitasModule { }
