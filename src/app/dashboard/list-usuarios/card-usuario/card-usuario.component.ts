import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {

  @Input() user: any;
  email = "";
  gender = "";
  id = 0;
  name = "";
  status = "";
  imgUrl = "http://drive.google.com/uc?export=view&id=11bZS315seO05sF2Hs9nd1vAi7k-kgnK0";

  constructor() {}

  ngOnInit(): void {
    this.email = this.user.email;
    this.gender = this.user.gender;
    this.id = this.user.id;
    this.name = this.user.name;
    this.status = this.user.status;
  }

}
