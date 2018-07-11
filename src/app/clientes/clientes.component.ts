import { Component, OnInit } from '@angular/core';
import { ClienteManterService } from './cliente-manter/cliente-manter.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
cliente: any
  constructor(private clienteService : ClienteManterService) { }

  ngOnInit() {
    this.obterClientePeloId();
  }

  obterClientePeloId(){
    this.clienteService.obterClientePeloId(1).subscribe(dados => this.cliente = dados.data)
  }
}
