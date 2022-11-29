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
  imgUrl = "https://caracoltv.brightspotcdn.com/dims4/default/65bd6b2/2147483647/strip/true/crop/1200x1200+0+0/resize/1000x1000!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2F66%2Ff6%2F290a3c1346f4bffb68e865444239%2Finglaterra-vs-estados-unidos.jpg";

  constructor() {}

  ngOnInit(): void {
    this.email = this.user.email;
    this.gender = this.user.gender;
    this.id = this.user.id;
    this.name = this.user.name;
    this.status = this.user.status;
  }

}
