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
  selector: 'home-client-c',
  templateUrl: './homeClient.component.html',
  styleUrl: './homeClient.component.css',
  standalone: true,
  imports: [RouterOutlet, LeftBarComponent, CommonModule],
})
export class HomeClientComponent {
  leftPosition = signal<number>(50);

  updateLeftPosition(position: number) {
    this.leftPosition.set(position);
  }

  barItems: LeftBarItemI[] = [
    {
      routeLink: 'control-board',
      icon: 'bx bx-scatter-chart',
      label: 'Control Board',
    },
    {
      routeLink: 'indicators',
      icon: 'bx bx-line-chart',
      label: 'Indicators',
    },
  ];
}
