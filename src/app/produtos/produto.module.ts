

import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { ProdutoFormComponent } from "./produto-form/produto-form.component";
import { ProdutoListComponent } from "./produto-list/produto-list.component";
import { ProdutoTableComponent } from "./produto-table/produto-table.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        ProdutoFormComponent,
        ProdutoListComponent,
        ProdutoTableComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        HttpClientModule,
        SharedModule
    ],
    exports: [
        ProdutoFormComponent,
        ProdutoListComponent,
        ProdutoTableComponent
    ]
})
export class ProdutoModule {
}
