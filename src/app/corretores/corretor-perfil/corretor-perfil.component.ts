import { Component, OnInit } from '@angular/core';
import { CorretoresService } from '../corretores.service'
@Component({
  selector: 'app-corretor-perfil',
  templateUrl: './corretor-perfil.component.html',
  styleUrls: ['./corretor-perfil.component.css']
})
export class CorretorPerfilComponent implements OnInit {

  constructor(private corretorService: CorretoresService) { }

  ngOnInit() {

  }


}
