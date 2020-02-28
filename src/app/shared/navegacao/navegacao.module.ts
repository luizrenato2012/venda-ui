import { NgModule } from "@angular/core";
import { NavegacaoComponent } from "./navegacao.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";

@NgModule({
    declarations : [NavegacaoComponent],
    imports :[
        RouterModule
    ],
    exports : [ NavegacaoComponent]
})
export class NavegacaoModule {

}