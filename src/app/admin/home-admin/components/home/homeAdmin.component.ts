import { Component, HostListener, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftBarComponent } from '../../../../share/components/left-bar/leftBar.component';
import { LeftBarItemI } from '../../../../share/types/leftBarItemI';

@Component({
  selector: 'home-admin-c',
  templateUrl: './homeAdmin.component.html',
  styleUrl: './homeAdmin.component.css',
  standalone: true,
  imports: [RouterOutlet, LeftBarComponent],
})
export class HomeAdminComponent {
  barItems: LeftBarItemI[] = [
    {
      routeLink: 'create-team',
      icon: 'add_circle',
      label: 'Create team',
    },
  ];
}
