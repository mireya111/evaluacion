import { Component } from '@angular/core';
import { HomePage } from './home/home.page'; // Asegúrate que esta ruta esté bien

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomePage],
  template: `<app-home></app-home>`, // Muestra el componente directamente
})
export class AppComponent {}
