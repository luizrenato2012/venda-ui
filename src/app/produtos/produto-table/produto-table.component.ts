import { Component, EventEmitter, Input, OnChanges, SimpleChange, Output } from '@angular/core';

@Component({
  selector: 'app-produto-table',
  templateUrl: './produto-table.component.html',
  styleUrls: ['./produto-table.component.css']
})
export class ProdutoTableComponent implements OnChanges {

  @Input()
  produtos = [];

  @Output()
  produtoSelecionado = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: {[propName: string] : SimpleChange}): void {
    let lista = changes.produtos.currentValue;
    lista.forEach(produto => {
      produto.selecionado = produto.selecionado==null ? false :  produto.selecionado;
    });
  }

  seleciona(produto: any) {
    this.produtoSelecionado.emit(produto);
  }

}
