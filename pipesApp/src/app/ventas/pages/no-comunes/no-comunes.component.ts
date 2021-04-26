import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

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
}
