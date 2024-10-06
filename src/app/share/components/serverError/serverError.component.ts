import { Component, Input, output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'server-error-c',
  templateUrl: './serverError.component.html',
  styleUrls: ['./serverError.component.css'],
  standalone: true,
  imports: [RouterModule],
})
export class SeverErrorComponent {
  @Input() error!: String;
}
