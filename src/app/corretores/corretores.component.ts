import { Component, OnInit } from '@angular/core';
import {CorretoresService} from './corretores.service';

@Component({
  selector: 'app-corretores',
  templateUrl: './corretores.component.html',
  styleUrls: ['./corretores.component.css']
})
export class CorretoresComponent implements OnInit {
 corretor: Array<any>;

  constructor(private corretoresService: CorretoresService) {
  	//this.corretor = corretoresService.listar()
  }

  ngOnInit(){
  	this.listarCorretores();
  }

  listarCorretores(){
  	this.corretoresService.listar().subscribe(dados => this.corretor = dados.data);
  }

}
