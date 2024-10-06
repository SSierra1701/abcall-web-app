import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'success-c',
  templateUrl: './success.component.html',
  styleUrl: './success.component.css',
  standalone: true,
})
export class SuccessComponent {
  @Input() message?: string;
  @Input() url?: string;
  constructor(private router: Router) {}

  onRouteTo() {
    this.router.navigateByUrl(this.url ?? '/');
  }
}
