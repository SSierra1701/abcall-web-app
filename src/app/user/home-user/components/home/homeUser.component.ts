import { Component, HostListener, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LeftBarComponent } from '../../../../share/components/left-bar/leftBar.component';
import { LeftBarItemI } from '../../../../share/types/leftBarItemI';

@Component({
  selector: 'home-user-c',
  templateUrl: './homeUser.component.html',
  styleUrl: './homeUser.component.css',
  standalone: true,
  imports: [RouterOutlet, LeftBarComponent],
})
export class HomeUserComponent {
  leftPosition = signal<number>(100);
  constructor(private router: Router) {}

  updateLeftPosition(position: number) {
    this.leftPosition.set(position);
  }

  logout() {
    // Lógica para cerrar sesión
    console.log("Cerrar sesión");
  }
  
  navigateToCreatePQR() {
    this.router.navigate(['create-pqr']);
  }

  barItems: LeftBarItemI[] = [
    {
      routeLink: 'pqr',
      icon: 'bx bx-mail-send',
      label: 'PQRs',
    },
    {
      routeLink: 'create-pqr',
      icon: 'bx bxs-message-rounded-add',
      label: 'Generate PQR',
    },
    {
      routeLink: 'sign-out',
      icon: 'bx bx-log-out',
      label: 'Sign Out',
    }
  ];
}
