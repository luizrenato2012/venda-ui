

import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { ProdutoFormModule } from "./produto-form/produto-form.module";
import { ProdutoListModule } from "./produto-list/produto-list.module";
import { ProdutoTableModule } from "./produto-table/produto-table.module";

@NgModule({
    imports: [
        HttpClientModule
    ],
    exports: [
        ProdutoListModule,
        ProdutoFormModule,
        ProdutoTableModule
    ]
})
export class ProdutoModule {
}
