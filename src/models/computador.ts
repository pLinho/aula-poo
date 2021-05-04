import { Processador } from './processador';

export class Computador {
    private _processador: Processador;
    constructor(processador: Processador) {
        this._processador = processador;
    }

    get processador() {
        return this._processador;
    }

    set processador(value: Processador) {
        this._processador = value;
    }

}