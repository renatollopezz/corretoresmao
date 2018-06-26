import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CorretoresService {
url = 'http://127.0.0.1:4200/api/corretor/listar';

  constructor(private http: HttpClient) { }

	listar(){

		return this.http.get<any>(`${this.url}`);
	}

}
