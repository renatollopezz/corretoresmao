import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
//INIT
import { AppComponent } from './app.component';
//CORRETOR
import { CorretoresComponent } from './corretores/corretores.component';
import { CorretoresService } from './corretores/corretores.service';
import { CorretorManterService } from './corretores/corretor-manter/corretor-manter.service';
import { CorretorManterComponent } from './corretores/corretor-manter/corretor-manter.component';
import { CorretorPerfilComponent } from './corretores/corretor-perfil/corretor-perfil.component';
import { CorretorServicoComponent } from './corretores/corretor-servico/corretor-servico.component';
//CLIENTES
import { ClienteManterComponent } from './clientes/cliente-manter/cliente-manter.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteManterService } from './clientes/cliente-manter/cliente-manter.service';
import { ClienteServicoComponent } from './clientes/cliente-servico/cliente-servico.component';

//CADASTRO
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    CorretoresComponent,
    CorretorManterComponent,
    CadastroComponent,
    ClienteManterComponent,
    CorretorPerfilComponent,
    ClienteServicoComponent,
    CorretorServicoComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'corretores',
        component: CorretoresComponent
      },
      {
        path: 'cliente-perfil',
        component: ClientesComponent
      },
      {
        path: 'corretor',
        component: CorretorManterComponent

      },
      {
        path: 'cadastro',
        component: CadastroComponent

      },
      {
        path: 'cliente',
        component: ClienteManterComponent

      },
      {
        path: 'corretor-perfil',
        component: CorretorPerfilComponent
      },
      {
          path: 'cliente-servicos',
          component: ClienteServicoComponent
      },
      {
          path: 'corretor-servicos',
          component: CorretorServicoComponent
      }
    ])

  ],
  providers: [CorretoresService,CorretorManterService,ClienteManterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
