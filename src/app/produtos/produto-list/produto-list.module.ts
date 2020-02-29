import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";
import { ProdutoListComponent } from "./produto-list.component";
import { ProdutoTableModule } from "../produto-table/produto-table.module";

@NgModule({
    declarations : [ProdutoListComponent],
    imports : [
        FormsModule,
        CommonModule,
        SharedModule,
        RouterModule,
        ProdutoTableModule
    ]
})
export class ProdutoListModule {

}