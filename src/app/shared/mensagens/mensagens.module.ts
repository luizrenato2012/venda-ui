import { NgModule } from "@angular/core";
import { MensagensComponent } from "./mensagens.component";
import { CommonModule } from "@angular/common";
import { MensagensValidacaoComponent } from "../mensagens-validacao/mensagens-validacao.component";

@NgModule({
    declarations : [ 
        MensagensComponent,
        MensagensValidacaoComponent
        ],
    exports : [ 
        MensagensComponent,
        MensagensValidacaoComponent 
    ],
    imports :[
        CommonModule
    ]
})
export class MensagensModule {

}