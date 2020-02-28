import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoFormComponent } from './produtos/produto-form/produto-form.component';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';
import { HomeComponent } from './home/home.component';
import { ProdutoResolver } from './produtos/produto-resolver';

const routes : Routes = [
  {
    path: 'produtos/novo', 
    component: ProdutoFormComponent
  },
  {
    path: 'produtos/edita/:id', 
    component: ProdutoFormComponent,
    resolve : {
      produto : ProdutoResolver
    }
  },
  { 
    path: 'produtos/lista', 
    component: ProdutoListComponent 
  },
  { 
    path: 'produtos/home', 
    component: HomeComponent 
  },
  { 
    path: '', redirectTo: '/produtos/home', 
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [ ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
