import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Cliente {
  nombre: string;
  direccion: string;
  telefono: string;
  fechaCompra: string;
}

interface pizzas  {
  tamanho: '',
  ingredientes: [],
  numeroPizzas: 0,
  subtotal: 0
};

@Component({
  selector: 'app-pizaas',
  templateUrl: './pizaas.component.html',
  styleUrls: ['./pizaas.component.css']
})

export class PizaasComponent implements OnInit{
  cliente: Cliente = {
    nombre: 'Bernardo',
    direccion: 'olivos',
    telefono: '4778427540',
    fechaCompra: '02/07/2023'
  };

  pizza: pizzas = {
    tamanho: '',
    ingredientes: [],
    numeroPizzas: 0,
    subtotal: 0,
  };

  pizzasForm!: FormGroup;
  detallePedido: any[] = [];
  // cliente = [
  //   {nombre: String},
  //   {direccion: String},
  //   {telefono: String},
  //   {fechaCompra: String},
  // ];
  ingredientes = [
    { nombre: 'Jamón' },
    { nombre: 'Queso' },
    { nombre: 'Tomate' },
    { nombre: 'Pepperoni' },
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.pizzasForm = this.formBuilder.group({
      cliente:['',Validators.required],
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      fechaCompra: ['', Validators.required],
      tamanho: ['', Validators.required],
      ingredientes: ['', Validators.required],
      numeroPizzas: ['', Validators.required]
    });
  }

  

  agregarPizza() {
    const pizza = this.pizzasForm.value;
    pizza.subtotal = this.calcularSubtotal(pizza);
    this.detallePedido.push(pizza);
    this.pizzasForm.reset();
  }

  quitarPizza(index: number) {
   this.detallePedido.splice(index, 1);
   this.calcularSubtotal(this.quitarPizza);
    }

  getIngredientes(pizza: any) {
    const ingredientesSeleccionados = Object.keys(pizza.ingredientes)
      .filter(ingredientes => pizza.ingredientes[ingredientes])
      .join(', ');
    return ingredientesSeleccionados;
  }

  calcularSubtotal(pizza: any) {
    let precioBase: number;
    switch (pizza.tamanho) {
      case 'Pequeña':
        precioBase = 8;
        break;
      case 'Mediana':
        precioBase = 10;
        break;
      case 'Grande':
        precioBase = 12;
        break;
    }
    const ingredientesSeleccionados = Object.keys(pizza.ingredientes)
      .filter(ingredientes => pizza.ingredientes[ingredientes]);
    const precioIngredientes = ingredientesSeleccionados.length * 1.5;
    return (pizza.precioBase + precioIngredientes) * pizza.numeroPizzas;
  }
  
}

