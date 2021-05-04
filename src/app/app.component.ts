import { Component } from '@angular/core';
import { IAutomovel } from 'src/models/automovel';
import { Carro } from 'src/models/carro';
import { Computador } from 'src/models/computador';
import { CarroModelo } from 'src/models/modelo';
import { Processador } from 'src/models/processador';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  automoveis: Array<Carro> = [];

  constructor() {
    // const computador: Computador = new Computador(new Processador(2.5))

    // console.log(computador)
    let carro_1: Carro;
    carro_1 = new Carro();
    carro_1.modelo = new CarroModelo('Fiat Uno')
    // const carro_2: Carro = new Carro();
    let carro_2 = new Carro();
    carro_2.modelo = new CarroModelo('Fiat Uno');

    if (carro_1 === carro_2) {
      console.log('Carros são iguais')
    } else {
      console.log('Carros são diferentes')
    }

    if (carro_1.modelo === carro_2.modelo) {
      console.log('Modelos são iguais')
    } else {
      console.log('Modelos são diferentes')
    }


    this.automoveis.push(carro_1, carro_2);
  }
}
