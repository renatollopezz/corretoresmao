import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CorretoresService} from './corretores.service';



import {CorretoresComponent} from './corretores.component';
import { CorretorManterComponent } from './corretor-manter/corretor-manter.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	CorretoresComponent,
  	CorretorManterComponent
  ],
  providers:[CorretoresService],
})
export class CorretoresModule { }
