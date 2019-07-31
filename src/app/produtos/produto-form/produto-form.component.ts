import { Produto } from './../produto';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent  implements OnInit {

  private produto : any = {};
  private tipoAlteracao= "";
  private texto = "";

  constructor(private produtoService: ProdutoService, private activatedRoute?: ActivatedRoute) {
    if (activatedRoute) {
      this.produto = this.activatedRoute.snapshot.data.produto;
    } else {
      this.produto= {};
    }
  }

  ngOnInit(): void {
   this.tipoAlteracao= this.produto==null || this.produto.id==null ? "Inclui" : "Altera";
  }

  grava(form: NgForm) {
    this.produtoService.adiciona(this.produto)
      .then( ()=>{
          console.log('Produto adicionado com sucesso');
          this.texto= "Produto cadastrado com sucesso!!!";
          this.produtoService.listaTodos()
            .then(retorno => console.log(`${JSON.stringify(retorno)}`));
       }).catch( error => {
        console.log(`erro ao adicionar ${error}`);
       });

    console.log(`${JSON.stringify(this.produtoService.listaTodos())}`);
    this.produto = {};
    form.reset();

  }

  limpaMensagem() {
    this.texto= "";
  }

}
