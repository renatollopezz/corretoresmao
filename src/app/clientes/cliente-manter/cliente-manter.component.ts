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

  retornoSalvar: any;;
  cliente: any;
  mostrarAlerta: any;

  ngOnInit() {
    this.cliente = {};
    this.mostrarAlerta = false;

  }

  salvarCliente(frm : FormGroup){
    this.mostrarAlerta = false;
    console.log(this.cliente);
    this.clienteManterService.salvar(this.cliente).subscribe(resposta => {
        this.retornoSalvar = resposta;

      }, error =>{
          console.log(error);
      });
  }

  limparCampos(){
    this.cliente={};
  }
}
