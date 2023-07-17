import { Component } from '@angular/core';


type Lista={
  nombre:string;
  costo:number
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {
  productos:Lista[]=[
    {
      nombre: "televisor",
      costo: 150000
    },
    {
      nombre: "impresora",
      costo: 12500
    },
    {
      nombre: "celular",
      costo: 139000
    }
  ]

  ocultar=()=>{
    console.log("hola")
  }

  show:boolean= true

  clicker=()=>{
    this.show=!this.show
  }
}