import { NgModule } from "@angular/core";
import { ProdutoTableComponent } from "./produto-table.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations : [ProdutoTableComponent],
    exports: [ProdutoTableComponent],
    imports: [
        CommonModule
    ]
})
export class ProdutoTableModule {

}