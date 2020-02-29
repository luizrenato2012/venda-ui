import { Produto } from './../produto';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent  implements OnInit {

  private tipoAlteracao= "";
  private texto = "";

  private formProduto : FormGroup;

  constructor(private produtoService: ProdutoService,
              private formBuilder : FormBuilder,
              private activatedRoute?: ActivatedRoute) {}

  ngOnInit(): void {
    this.criaForm();
   this.preencheCampos();
  }

  private criaForm() {
    this.formProduto = this.formBuilder.group({
      descricao : ['', Validators.required],
      preco : ['', Validators.required]
    });
    this.formProduto.dirty
  }

  private preencheCampos() {
    let produto = this.activatedRoute.snapshot.data.produto != undefined ?
      this.activatedRoute.snapshot.data.produto : {descricao:'', preco: ''};
    this.formProduto.setValue(produto);
    this.tipoAlteracao= (produto==null || produto.id==null) ? "Inclui " : "Altera ";
  }

  grava() {
    let produto = {descricao : this.formProduto.get('descricao').value, 
                   preco : this.formProduto.get('preco').value};
    this.produtoService.grava(produto)
      .subscribe(retorno => {
          this.texto= "Produto cadastrado com sucesso!!!";
          this.produtoService.listaTodos()
            .then(retorno => console.log(`${JSON.stringify(retorno)}`));
            this.formProduto.reset();
       },
        error => {
         console.log(`erro ao adicionar ${error}`);
         this.texto = "Erro ao gravar";
       });
  }

  limpaMensagem() {
    this.texto= "";
  }

}
