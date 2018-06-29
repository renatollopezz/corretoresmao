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
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*','Access-Control-Allow-Headers': 'Authorization' })
    };

    let jsonData =
    {
            nome:"Victor",
            email:"renatollopezzfucapi@gmail.com",
            password:"123456",
            cpf:"12345678",
            creci:"12345678",
            data_nascimento:"1999-02-02",
            ddd:"92",
            celular:"12345678",
            cidade:"manaus",
            estado:"amazonas",
            logradouro:"rua dallas",
            bairro:"flores",
            numero:"35",
            complemento:"qa",
            cep:"12345678",
            tipo:1,
            status:0,
            servico_id:[1],
            password_confirmation:"123456"
        };

    return this.http.post<any>(`${this.urlCorretor}/salvar`,
            jsonData,httpOptions
    );

  }

  save(contato : any){
    console.log(contato);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*','Access-Control-Allow-Headers': 'Authorization' })
    };
    return this.http.post(`${this.urlCorretor}/salvar`,
            contato,httpOptions
  }
}
