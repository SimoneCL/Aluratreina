class Negociacoes {
    constructor() {
        //variavel do tipo array  de negociações
        this._negociacoes = [];
    }
    /* outra forma de definir um array de negociações é assim
    private _negociacoes: Negociacao[] = [];*/
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        //o comando abaixou estou concatenado o array de negociacao
        return [].concat(this._negociacoes);
    }
}
