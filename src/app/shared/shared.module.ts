import { NgModule } from "@angular/core";
import { NavegacaoComponent } from "./navegacao/navegacao.component";
import { MensagensModule } from "./mensagens/mensagens.module";
import { CommonModule } from "@angular/common";
import { NavegacaoModule } from "./navegacao/navegacao.module";

@NgModule({
    // declarations : [
    //     MensagensModule
    // ],
    // imports : [
    //     MensagensModule
    // ],
     exports: [
         MensagensModule,
         NavegacaoModule
    ]

})
export class SharedModule {

}