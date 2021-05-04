export class Processador {
    private _frequencia: number;
    
    constructor(frequencia: number) {
        this._frequencia = frequencia;
    }

    set frequencia(value: number) {
        this._frequencia = value;
    }

    get frequencia() {
        return this._frequencia;
    }
}