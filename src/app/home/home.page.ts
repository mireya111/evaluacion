import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Auth } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { createUserWithEmailAndPassword } from '@angular/fire/auth';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage {
  nombre: string = '';
  apellido: string = '';
  direccion: string = '';
  edad: number | null = null;
  email: string = '';
  password: string = '';
  fechaNacimiento: string = '';  // Variable para almacenar la fecha
  hobbies: string[] = [];        // Variable para almacenar los hobbies seleccionados

  constructor(private auth: Auth, private firestore: Firestore) {}

  async register() {
    const { email, password, nombre, apellido, direccion, edad, fechaNacimiento, hobbies } = this;

    if (!nombre || !apellido || !direccion || !edad || !email || !password || !fechaNacimiento) {
      console.error('Por favor, complete todos los campos');
      return;
    }

    try {
      // Crear el usuario en Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);

      // Obtener el UID del usuario
      const uid = userCredential.user.uid;

      // Guardar los datos del usuario en Firestore
      await setDoc(doc(this.firestore, 'usuarios', uid), {
        nombre,
        apellido,
        direccion,
        edad,
        email,
        fechaNacimiento,
        hobbies,
        uid,
      });

      console.log('Usuario registrado correctamente');
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  }
}
