import { Component, OnInit } from '@angular/core';
import {CorretoresService} from './corretores.service';

@Component({
  selector: 'app-corretores',
  templateUrl: './corretores.component.html',
  styleUrls: ['./corretores.component.css']
})
export class CorretoresComponent implements OnInit {
 corretor: Array<any>;
 perfil: any;
 checkServico: any;
listaServicosCorretor: any;

  constructor(private corretoresService: CorretoresService) {}

  ngOnInit(){
  	this.listarCorretores();
  }

  listarCorretores(){
  	this.corretoresService.listar().subscribe(dados => this.corretor = dados.data);
  }
  mostrarPerfil(corretor: any){
    this.perfil = corretor;
    this.listarServicosDoCorretor(corretor.id)
  }
  listarServicosDoCorretor(id : any){
     this.corretoresService.listarServicosDoCorretor(id).subscribe(dados => this.listaServicosCorretor = dados.data)
  }
}
