import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent {

  produtos = [];
  mensagem= "";
  argumento= "";
  produtoEdicao: any;
  urlEdicao= "";

  constructor(private produtoService: ProdutoService) { }

  pesquisa() {
    this.produtoService.pesquisa(this.argumento)
      .then(retorno=> {
        this.produtos = retorno;
        this.mensagem =`Encontrado(s) ${this.produtos.length} produtos`;
        this.produtoEdicao= null;
      }).catch(error =>  {
        this.mensagem ="Erro ao pesquisar! ";
        console.error(`Erro ao pesquisar:\n ${JSON.stringify(error)}`);
    });
  }

  exclui() {
    if (this.produtoEdicao==null) {
      alert('Selecione um produto!');
      return;
    }
    console.log('>>> Excluindo ');
    if (confirm(`Deseja excluir ${JSON.stringify(this.produtoEdicao.descricao)}?`)) {
      this.produtoService.exclui(this.produtoEdicao.id)
        .subscribe( () => {
                        this.mensagem= "Produto excluido com sucesso!";
                        this.pesquisa();
                    }, 
                    (error) => {
                        console.log(`Erro ao excluir produto:; ${JSON.stringify(error)}`);
                        this.mensagem="Erro ao excluir produto";
                    });
      
    } else {
      this.mensagem= "";
    }
  }

  produtoRecebido(valor: any) {
    this.produtoEdicao = valor;
    this.urlEdicao= `/produtos/edita/${this.produtoEdicao.id}`;
  }

}
