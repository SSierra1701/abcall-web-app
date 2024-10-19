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
      icon: 'query_stats',
      label: 'PQRs',
    },
    {
      routeLink: 'create-pqr',
      icon: 'bar_chart',
      label: 'Add PQR',
    },
  ];
}
