import { Component, HostListener, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
  barItems: LeftBarItemI[] = [
    {
      routeLink: 'pqr',
      icon: 'mail',
      label: 'PQRs',
    },
    {
      routeLink: 'create-pqr',
      icon: 'add_circle',
      label: 'Generate PQR',
    },
  ];
}
