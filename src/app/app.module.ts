import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'
//INIT
import { AppComponent } from './app.component';
//CLIENTES
import { ClientesComponent } from './clientes/clientes.component';
//CORRETOR
import { CorretoresComponent } from './corretores/corretores.component';
import { CorretoresService } from './corretores/corretores.service';
import { CorretorManterService } from './corretores/corretor-manter/corretor-manter.service';
import { CorretorManterComponent } from './corretores/corretor-manter/corretor-manter.component';
//SERVICOS

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    CorretoresComponent,
    CorretorManterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'corretores',
        component: CorretoresComponent
      },
      {
        path: 'clientes',
        component: ClientesComponent
      },
      {
        path: 'corretor',
        component: CorretorManterComponent

      },

    ])

  ],
  providers: [CorretoresService,CorretorManterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
