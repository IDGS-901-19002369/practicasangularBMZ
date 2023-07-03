import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent {
  punto1: { x: number, y: number } = { x: 0, y: 0 };
  punto2: { x: number, y: number } = { x: 0, y: 0 };
  distancia: number = 0;

  calcularDistancia(): void {
    const dx = this.punto2.x - this.punto1.x;
    const dy = this.punto2.y - this.punto1.y;
    this.distancia = Math.sqrt(dx * dx + dy * dy);
  }
}



