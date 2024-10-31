import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pqr-user-c',
  templateUrl: './pqr-user.component.html',
  styleUrls: ['./pqr-user.component.css'],
  standalone: true,
})
export class PqrUserComponent {
  constructor(private router: Router) {}

  navigateToCreatePQR() {
    this.router.navigate(['home-user', 'create-pqr']); // Navega a la ruta anidada dentro de home-user
  }
}
