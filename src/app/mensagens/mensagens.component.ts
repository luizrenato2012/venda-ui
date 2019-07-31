import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mensagens',
  template: `
    <div class="alert alert-primary" *ngIf="texto!=''">
      {{ texto }}
    </div>
  `,
  styles: [
    '.alert { margin-top: 20px; margin-bottom: 10px }'
  ]
})
export class MensagensComponent {

  @Input()
  texto = "";

  constructor() { }

}
