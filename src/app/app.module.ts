import { ProdutoService } from './produtos/produto.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProdutoFormComponent } from './produtos/produto-form/produto-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MensagensComponent } from './mensagens/mensagens.component';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';
import { ProdutoTableComponent } from './produtos/produto-table/produto-table.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ProdutoFormComponent,
    MensagensComponent,
    ProdutoListComponent,
    ProdutoTableComponent,
    NavegacaoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule, HttpClientModule, AppRoutingModule
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
