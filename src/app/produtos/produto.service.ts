import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PromiseState } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  url="http://localhost:3000/produtos";

  constructor(private httpClient: HttpClient) { }

  grava(produto: any) : Observable<any> {
    console.log(`adiciona ${produto}`);
    if (produto.id!=null && produto.id!=undefined) {
     return this.httpClient.put(this.url+"/"+ produto.id, produto);
    } else {
      return this.httpClient.post(this.url, produto);
    }
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

  encontra(id: number): Observable<any>{
    // return this.httpClient.get(this.url +"/"+ id)
    //   .toPromise();
    return this.httpClient.get(this.url+"/"+ id);
  }
}
