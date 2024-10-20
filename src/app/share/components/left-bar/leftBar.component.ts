import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, input, output, signal } from '@angular/core';
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

  isActive = signal<boolean>(false);
  sideBarOutput = output<number>();

  updatePosition(): void {
    this.isActive.set(!this.isActive());
    if (this.isActive()) {
      this.sideBarOutput.emit(250);
    } else {
      this.sideBarOutput.emit(50);
    }
  }
}
