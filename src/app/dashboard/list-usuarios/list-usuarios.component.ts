import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {

  listUsuarios: any[] = [];
  loading = true;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario(): void{
    this.usuarioService.getUsuarios().subscribe(data => {
      this.listUsuarios = data;
      this.loading = false;
    })
  }
}
