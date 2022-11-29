import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  id: number;
  email = "";
  gender = "";
  name = "";
  status = "";
  loading = true;

  constructor(private aRoute: ActivatedRoute, private usuarioService: UsuarioService) {
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    console.log(this.id)
    this.getUsuario();
    
  }

  getUsuario(): void{
    this.usuarioService.getUsuario(this.id).subscribe(data => {
      console.log(data);
      this.email = data.email;
      this.gender = data.gender;
      this.name = data.name;
      this.status = data.status;
    })
  }

}
