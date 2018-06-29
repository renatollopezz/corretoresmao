import { Component, OnInit } from '@angular/core';
import { ClienteManterService } from './cliente-manter.service';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-cliente-manter',
  templateUrl: './cliente-manter.component.html',
  styleUrls: ['./cliente-manter.component.css']
})
export class ClienteManterComponent implements OnInit {
  constructor(private clienteManterService: ClienteManterService) { }

  retornoSalvar: {};
  cliente: any;
  mostrarAlerta: any;

  ngOnInit() {
    this.cliente = {};
    this.mostrarAlerta = false;

  }

  salvarCliente(frm : FormGroup){
    this.mostrarAlerta = false;
    console.log(this.cliente);
    this.clienteManterService.salvar(this.cliente).
      subscribe(resposta => {

        if(resposta.status){
          this.retornoSalvar = resposta.message;
          this.mostrarAlerta = true;
          this.limparCampos();
        }else{
          let erro = {msg: "Ocorreu algum erro ao tentar salvar, verifique os campos informados!"}
          this.mostrarAlerta = true;
          this.retornoSalvar = erro.msg;
        }

      }, error =>{
          console.log(error);
      });
  }
  limparCampos(){
    this.cliente={};
  }
}
