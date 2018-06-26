import { Component, OnInit } from '@angular/core';
import { CorretorManterService } from './corretor-manter.service';
@Component({
  selector: 'app-corretor-manter',
  templateUrl: './corretor-manter.component.html',
  styleUrls: ['./corretor-manter.component.css']
})
export class CorretorManterComponent implements OnInit {

  constructor(private corretorManterService: CorretorManterService) { }
  servicos: Array<any>;
  ngOnInit() {
      this.listarServicos();
  }

  listarServicos(){
    this.corretorManterService.listar().subscribe(dados => this.servicos =  dados.data)
  }

  salvarCorretor(){
    this.corretorManterService.salvar();
  }
}
