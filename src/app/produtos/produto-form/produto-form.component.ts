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

  constructor(private produtoService: ProdutoService, private activatedRoute?: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.data.produto != undefined ) {
      console.log(`>>> recebendo produto da rota ${JSON.stringify( this.activatedRoute.snapshot.data)}`);
      this.produto = this.activatedRoute.snapshot.data.produto;
      console.log(`produto ${JSON.stringify(this.produto)}`);
    } else {
      console.log('Inclusao de produto');
      this.produto= {};
    }
    this.tipoAlteracao= this.produto==null || this.produto.id==null ? "Inclui " : "Altera ";
  }

  grava(form: NgForm) {
    this.produtoService.grava(this.produto)
      .subscribe( (retorno) =>{
          console.log('Produto adicionado com sucesso');
          this.texto= "Produto cadastrado com sucesso!!!";
          this.produtoService.listaTodos()
            .then(retorno => console.log(`${JSON.stringify(retorno)}`));
       },
       (error) => {
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
