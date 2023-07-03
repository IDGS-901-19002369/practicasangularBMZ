import { Component } from '@angular/core';

export interface Resistance {
   color1: string;
   color2: string;
   multiplier: string;
   tolerance: string;
   max:string;
   min:string;
}

@Component({
   selector: 'app-resistencias',
   templateUrl: './resistencias.component.html',
   styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
   resistor: Resistance = {
      color1: '',
      color2: '',
      multiplier: '',
      tolerance: '',
      max: '',
      min: ''
   };

   multiplierBackground:string=this.resistor.multiplier;
   toleranceBackground:string=this.resistor.tolerance;

   colorList: string[] = [
      'Negro',
      'Marrón',
      'Rojo',
      'Naranja',
      'Amarillo',
      'Verde',
      'Azul',
      'Violeta',
      'Gris',
      'Blanco'
   ];

   multiplierList: { value: number; label: string; }[] = [
      { value: 1, label: 'Negro' },
      { value: 10, label: 'Marrón' },
      { value: 100, label: 'Rojo' },
      { value: 1000, label: 'Naranja' },
      { value: 10000, label: 'Amarillo' },
      { value: 100000, label: 'Verde' },
      { value: 1000000, label: 'Azul' },
      { value: 10000000, label: 'Violeta' },
      { value: 100000000, label: 'Gris' },
      { value: 1000000000, label: 'Blanco' },
      { value: 0.1, label: 'Dorado' },
      { value: 0.01, label: 'Plateado' }
   ];
   
   

   toleranceList: { value: number; label: string; }[] = [
      { value: 0.05, label: 'Dorado' },
      { value: 0.1, label: 'Plateado' }
   ];
   

   calculatedResistance: number = 0;
   result: boolean = false;
   calculate(): void {
      const code1: number = this.colorList.indexOf(this.resistor.color1);
      const code2: number = this.colorList.indexOf(this.resistor.color2);
    
      // Se debe convertir la string del multiplicador a un número mediante el uso de la función parseInt().
      const multiplier: number = parseInt(this.resistor.multiplier);
    
      const toleranceMultiplier = (100 + parseFloat(this.resistor.tolerance)) / 100;
      const calculatedResistance = (code1 * 10 + code2) * multiplier;
      const maxResistance = calculatedResistance * (1 + toleranceMultiplier);
      const minResistance = calculatedResistance * (1 - toleranceMultiplier);

      if(this.resistor.tolerance=='0.05'){
         this.resistor.max =  (calculatedResistance*1.05).toString()
         this.resistor.min = (calculatedResistance-(calculatedResistance*.05)).toString()

      }else if(this.resistor.tolerance=='0.1'){
          this.resistor.max =  (calculatedResistance*.10).toString()
         this.resistor.min = (calculatedResistance-(calculatedResistance*.10)).toString()
      }
    
      this.calculatedResistance = calculatedResistance;
      this.result = true;
    }


    
 
   getColor(color: string): string {
      switch (color) {
         case 'Negro':
            return 'bg-dark text-light';
         case 'Marrón':
            return 'bg-brown text-dark';
         case 'Rojo':
            return 'bg-danger text-light';
         case 'Naranja':
            return 'bg-orange text-dark';
         case 'Amarillo':
            return 'bg-yellow text-dark';
         case 'Verde':
            return 'bg-success text-dark';
         case 'Azul':
            return 'bg-primary text-light';
         case 'Violeta':
            return 'bg-violet text-light';
         case 'Gris':
            return 'bg-secondary text-light';
         case 'Blanco':
            return 'bg-white text-dark';
         default:
            return '';
      }
   }

   getMultiplierColor(multiplier: string): string {
      switch (multiplier) {
         case '1':
            return 'bg-black text-light';
         case '10':
            return 'bg-brown text-dark';
         case '100':
            return 'bg-danger text-light';
         case '1000':
            return 'bg-orange text-dark';
         case '10000':
            return 'bg-yellow text-dark';
         case '100000':
            return 'bg-success text-dark';
         case '1000000':
            return 'bg-primary text-light';
         case '10000000':
            return 'bg-violet text-light';
         case '100000000':
            return 'bg-secondary text-light';
         case '1000000000':
            return 'bg-white text-dark';
         case '0.1':
            return 'bg-gold text-dark';
         case '0.01':
            return 'bg-silver text-dark';
         default:
            return '';
      }
   }
   

    getToleranceColor(tolerance: string): string {
      switch (tolerance) {
        case '0.05':
          return 'bg-gold text-dark';
        case '0.1':
          return 'bg-silver text-dark';
        case '0.2':
          return 'bg-brown text-dark';
        default:
          return '';
      }
    }
    
    
   
}