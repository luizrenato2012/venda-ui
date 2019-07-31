import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PromiseState } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  url="http://localhost:3000/produtos";

  constructor(private httpClient: HttpClient) { }

  adiciona(produto: any) : Promise<any> {
    console.log(`adiciona ${produto}`);
    return this.httpClient.post(this.url, produto)
      .toPromise();
  }

  listaTodos() : Promise<any> {
    return this.httpClient.get(this.url)
      .toPromise();
  }

  pesquisa(descricao: string): Promise<any> {
    let urlFinal= (descricao==='' || descricao === undefined) ?
      this.url : this.url +"?descricao="+descricao;
    console.log(urlFinal);
    return this.httpClient.get(urlFinal)
      .toPromise();
  }

  exclui(id: number) {
    return this.httpClient.delete(this.url)

  }

  encontra(id:number) {
    return this.httpClient.get(this.url +"/"+ id)
      .toPromise();
  }
}
