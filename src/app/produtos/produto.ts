export class Produto {
  _marcado = false;

  constructor(private id:number, private descricao : string) {
  }

  get marcado() {
    return this._marcado;
  }

  set marcado(flag :boolean) {
    this._marcado = flag;
  }
}
