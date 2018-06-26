import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class CorretorManterService {

  urlServico  = 'http://127.0.0.1:4200/api/servico';
  urlCorretor = 'http://127.0.0.1:4200/api/corretor';
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any>(`${this.urlServico}/listar`);
  }

  salvar(){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    let jsonData =
    {
            nome:"Victor",
            email:"renato@lopes",
            password:"111",
            cpf:"020202020",
            creci:"222233333",
            data_nascimento:"1999-02-02",
            ddd:"92",
            celular:"828282",
            cidade:"manaus",
            estado:"amazonas",
            logradouro:"rua dallas",
            bairro:"flores",
            numero:"35",
            complemento:"qa",
            cep:"292929",
            tipo:1,
            status:0,
            servico_id:1
        };

    var log = this.http.post<any>(`${this.urlCorretor}/salvar`,
            jsonData,httpOptions
    ).subscribe(result => {
        console.log(result);
    });
}
}
