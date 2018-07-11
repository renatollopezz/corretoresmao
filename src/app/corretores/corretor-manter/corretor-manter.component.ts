import { Component, OnInit } from '@angular/core';
import { CorretorManterService } from './corretor-manter.service';
import { FormGroup } from "@angular/forms";
@Component({
  selector: 'app-corretor-manter',
  templateUrl: './corretor-manter.component.html',
  styleUrls: ['./corretor-manter.component.css']
})
export class CorretorManterComponent implements OnInit {

  constructor(private corretorManterService: CorretorManterService) { }
  servicos: Array<any>;
  retornoSalvar: any;
  corretor: any;
  mostrarAlerta: any;
  ngOnInit() {
    this.mostrarAlerta = false;
      this.corretor = {};
      this.listarServicos();
  }

  listarServicos(){
    this.corretorManterService.listar().subscribe(dados => this.servicos =  dados.data)
  }

  salvarCorretor(frm : FormGroup){
    //return this.corretorManterService.salvar().
    //subscribe(result => {this.retornoSalvar = result},
      //                  error =>{error.error});

      this.corretorManterService.save(this.corretor).subscribe(
        resposta =>{
          this.retornoSalvar = resposta;
          
            console.log(resposta);
            this.mostrarAlerta = true;
            this.corretor = {}
            this.limparCampos();
        },
        error =>{


        }
    );
  }

  limparCampos(){
    this.corretor = {};
  }
}
