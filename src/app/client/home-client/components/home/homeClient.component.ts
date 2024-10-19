import { Component, HostListener, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftBarComponent } from '../../../../share/components/left-bar/leftBar.component';
import { LeftBarItemI } from '../../../../share/types/leftBarItemI';

@Component({
  selector: 'home-client-c',
  templateUrl: './homeClient.component.html',
  styleUrl: './homeClient.component.css',
  standalone: true,
  imports: [RouterOutlet, LeftBarComponent],
})
export class HomeClientComponent {
  barItems: LeftBarItemI[] = [
    {
      routeLink: 'control-board',
      icon: 'query_stats',
      label: 'Control Board',
    },
    {
      routeLink: 'indicators',
      icon: 'bar_chart',
      label: 'Indicators',
    },
  ];
}
