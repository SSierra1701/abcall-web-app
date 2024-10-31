import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-create-pqr',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-pqr.component.html',
  styleUrl: './create-pqr.component.css'
})
export class CreatePqrComponent {
  //constructor(private router: Router) {}
  

  //constructor(private http: HttpClient) {}
  //closeForm() {
    //this.router.navigate(['home-user', 'pqr']); // Navega a la ruta anidada dentro de home-user
  //}
  files: File[] = [];

  constructor(private http: HttpClient) {}

  onFileChange(event: any) {
    this.files = Array.from(event.target.files);
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('title', (document.getElementsByName('title')[0] as HTMLInputElement).value);
    formData.append('description', (document.getElementsByName('description')[0] as HTMLTextAreaElement).value);
    formData.append('userPriority', (document.getElementsByName('userPriority')[0] as HTMLSelectElement).value);

    this.files.forEach(file => {
      formData.append('files', file, file.name);
    });

    this.http.post('/api/pqr/create', formData).subscribe(response => {
      console.log('PQR creado exitosamente:', response);
      this.closeForm();  // Cerrar el formulario o limpiar el formulario
    }, error => {
      console.error('Error al crear PQR:', error);
    });
  }

  closeForm() {
    // Lógica para cerrar el formulario
  }
}
