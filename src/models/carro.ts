import { CarroModelo } from './modelo';

export class Carro /* implements IAutomovel */ {
    private _modelo?: CarroModelo;

    constructor() {

    }
    acelerar(): void {
    }
    frear(): void {
    }
    acenderFarol(): void {
    }

    get modelo() {
        return this._modelo;
    }

    set modelo(value: CarroModelo | undefined) {
        this._modelo = value;
    }

}