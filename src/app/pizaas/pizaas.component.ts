import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-pizaas',
  templateUrl: './pizaas.component.html',
  styleUrls: ['./pizaas.component.css']
})

export class PizaasComponent implements OnInit{
  pizzaForm!: FormGroup;
  pizzaDetalles: any[] = [
    
  ];

  mostrarConfirmacion: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.pizzaForm = this.fb.group({
      cantidad: new FormControl(1),
      nombre: new FormControl(''),
      direccion: new FormControl(''),
      telefono: new FormControl(''),
      tamano: new FormControl(''),
      jamon: new FormControl(false),
      pina: new FormControl(false),
      champinones: new FormControl(false),
      fecha: new FormControl(''),
    });
  }

  onSubmit(): void {
    this.agregarPizza();
  }

  agregarPizza() {
    const pizza = {
      tamano: this.pizzaForm.get('tamano')?.value,
      ingredientes: this.getIngredientesSeleccionados(),
      cantidad: this.pizzaForm.get('cantidad')?.value,
      subtotal: this.calcularSubtotal(),
      nombre: this.pizzaForm.get('nombre')?.value,
      direccion: this.pizzaForm.get('direccion')?.value,
      telefono: this.pizzaForm.get('telefono')?.value,
      fecha: this.pizzaForm.get('fecha')?.value
    };

    this.pizzaDetalles.push(pizza);
    console.log(this.pizzaDetalles);

    
  }

  eliminarPizza(pizza: any) {
    const index = this.pizzaDetalles.indexOf(pizza);
    if (index !== -1) {
      this.pizzaDetalles.splice(index, 1);
    }
  }

  getIngredientesSeleccionados() {
    const ingredientes: string[] = [];
    const formValue = this.pizzaForm.value;

    if (formValue.jamon) {
      ingredientes.push('Jamón');
    }
    if (formValue.pina) {
      ingredientes.push('Piña');
    }
    if (formValue.champinones) {
      ingredientes.push('Champiñones');
    }

    return ingredientes;
  }

  calcularSubtotal() {
    let subtotal = 0;
    const formValue = this.pizzaForm.value;

    if (formValue.tamano === 'Chica') {
      subtotal = 40;
    } else if (formValue.tamano === 'Mediana') {
      subtotal = 80;
    } else if (formValue.tamano === 'Grande') {
      subtotal = 120;
    }

    const ingredientesSeleccionados = this.getIngredientesSeleccionados();
    subtotal += ingredientesSeleccionados.length * 10;

    return subtotal * formValue.cantidad;
  }

  finalizarCompra() {
    this.mostrarConfirmacion = true;
  }

  confirmarPedido() {
 
    console.log('Pedido confirmado');
    this.mostrarConfirmacion = false;
  }

  editarPedido() {
    this.mostrarConfirmacion = false;
  }

  calcularTotal(): number {
    let total = 0;
    for (const pizza of this.pizzaDetalles) {
      total += pizza.subtotal;
    }
    return total;
  }
}