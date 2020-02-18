class Negociacoes {
    //variavel do tipo array  de negociações
    private _negociacoes: Array<Negociacao> = [];
    /* outra forma de definir um array de negociações é assim
    private _negociacoes: Negociacao[] = [];*/

    adiciona(negociacao: Negociacao): void {

        this._negociacoes.push(negociacao);
    }
    paraArray(): Negociacao[] {
        //o comando abaixou estou concatenado o array de negociacao
        return [].concat(this._negociacoes);

    }
}