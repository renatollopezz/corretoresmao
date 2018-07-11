import { NgModule,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CorretoresService} from './corretores.service';



import {CorretoresComponent} from './corretores.component';
import { CorretorManterComponent } from './corretor-manter/corretor-manter.component';
import { CorretorPerfilComponent } from './corretor-perfil/corretor-perfil.component';
import { CorretorServicoComponent } from './corretor-servico/corretor-servico.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	CorretoresComponent,
  	CorretorManterComponent,
  	CorretorPerfilComponent,
  	CorretorServicoComponent
  ],
  providers:[CorretoresService],
})
export class CorretoresModule { }
