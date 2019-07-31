import { Component, OnInit, Input, OnChanges, SimpleChange, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

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

  constructor() {

  }

  ngOnChanges(changes: {[propName: string] : SimpleChange}): void {
    // console.log('debug');
    // console.log(`prop ${JSON.stringify(changes)}`);
    let lista = changes.produtos.currentValue;
    lista.forEach(produto => {
      produto.selecionado = produto.selecionado==null ? false :  produto.selecionado;
    });
  }


  seleciona(produto: any) {
    this.produtoSelecionado.emit(produto);
  }


}
