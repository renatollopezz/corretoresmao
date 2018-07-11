import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class ClienteManterService {
url = 'http://127.0.0.1:4200/api/cliente';

  constructor(private http: HttpClient) { }

	listar(){

		return this.http.get<any>(`${this.url}`);
	}

  salvar(cliente: any){
    console.log(cliente);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*','Access-Control-Allow-Headers': 'Authorization' })
    };
    return this.http.post(`${this.url}/salvar`,cliente,httpOptions);
  }

  obterClientePeloId(id : any){
    return this.http.get<any>(`${this.url}/get/`)
  }

}
