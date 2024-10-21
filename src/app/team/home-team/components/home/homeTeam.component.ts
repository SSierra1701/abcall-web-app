import {
  Component,
  HostListener,
  NgModule,
  OnInit,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftBarComponent } from '../../../../share/components/left-bar/leftBar.component';
import { LeftBarItemI } from '../../../../share/types/leftBarItemI';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-team-c',
  templateUrl: './homeTeam.component.html',
  styleUrl: './homeTeam.component.css',
  standalone: true,
  imports: [RouterOutlet, LeftBarComponent, CommonModule],
})
export class HomeTeamComponent {
  leftPosition = signal<number>(50);

  updateLeftPosition(position: number) {
    this.leftPosition.set(position);
  }

  barItems: LeftBarItemI[] = [
    {
      routeLink: 'resolve-pqr',
      icon: 'bx bx-book-bookmark',
      label: 'Resolve PQR',
    },
  ];
}
