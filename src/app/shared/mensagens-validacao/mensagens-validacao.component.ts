import { Component, Input } from "@angular/core";

@Component({
    selector : 'app-mensagem-validacao',
    template :'<div class="texto" class="erro"> {{texto}} </div>',
    styles : [`
            .erro {
                border: 1px solid red;
                color: white;
                margin-top: 3px;
                padding-left: 3px;
                background-color: #ff8080;
            }`]
})
export class MensagensValidacaoComponent {

    @Input()
    texto : string;

}