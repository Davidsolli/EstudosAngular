import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  show: boolean = true;
  RedOrGreen: boolean = true;

  pred = "redText";
  preen = "greenText"; 

  showMessage(): void {
    this.show = !this.show; // toglle inverte os valores
  }

  tradeColors(): void {
    this.RedOrGreen = !this.RedOrGreen;
  }
}
