import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProdutoService } from './produto.service';

@Injectable({
  providedIn: "root"
})
export class ProdutoResolver implements Resolve<Observable<any>> {

  constructor(private produtoService: ProdutoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) :  Observable<any> {
    const id = route.params.id;
    console.log('>> resolver id ' + id);
    // return this.produtoService.encontra(id)
    //   .then(retorno =>  {console.log('retorno \n' + JSON.stringify(retorno)); retorno});
    return this.produtoService.encontra(id);
  }
}
