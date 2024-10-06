import { CommonModule } from '@angular/common';
import { Component, Input, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LeftBarItemI } from '../../types/leftBarItemI';

@Component({
  selector: 'left-bar-c',
  templateUrl: './leftBar.component.html',
  styleUrl: './leftBar.component.css',
  standalone: true,
  imports: [RouterModule, CommonModule],
})
export class LeftBarComponent {
  @Input() items?: LeftBarItemI[];

  isCollapsed = true;

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
