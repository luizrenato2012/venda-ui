import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { ProdutoFormComponent } from "./produto-form.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations : [ProdutoFormComponent],
    exports : [ProdutoFormComponent],
    imports : [
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        RouterModule
    ]
})
export class ProdutoFormModule {

}