import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit
{

  //i18nplural
  clientes: string[] = ['Maria','Pedro','Otro'];
  clientesMapa = {
    '=0' : 'no tenemos ningun cliente esperando',
    '=1' : 'un cliente esperando',
    'other': 'tenemos # clientes esperando' 

  }

  //i18nselect
  nombre: string = "Fernando";
  genero:string = "masculino";

  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino': 'invitarla'
  };

  constructor(private primengConfig: PrimeNGConfig) {

  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  cambiarPersona(){
    this.nombre = "asdasdasdasd";
    this.genero = "femenino";
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValuePipe
  personas = {
    nombre: 'Fernando',
    edad: 35,
    direccion: "OT CANADA"
  }

  heroes = [
    {
      nombre: "Superman",
      vuela: true
    },
    {
      nombre: "Robin",
      vuela: false
    },
    {
      nombre: "Aquaman",
      vuela: false
    }
  ];

  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() =>{
      resolve('Tenemos data de la promesa');
    }, 3500);
  } );
}
