import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SignInClientFormComponent } from '../../../sign-in-client/components/form/sign-in-form.component';
import { SignInTeamFormComponent } from '../../../sign-in-team/components/form/sign-in-form.component';
import { SignInUserFormComponent } from '../../../sign-in-user/components/form/sign-in-form.component';

@Component({
  selector: 'sign-c',
  templateUrl: './sign.component.html',
  styleUrl: 'sign.component.css',
  standalone: true,
  imports: [
    CommonModule,
    SignInClientFormComponent,
    SignInTeamFormComponent,
    SignInUserFormComponent,
  ],
})
export class SignInComponent {
  userTypes: string[] = ['User', 'Client', 'Team'];

  onSwitchForm(direction: number) {
    const active = this.userTypes[1 + direction];
    this.userTypes[1 + direction] = this.userTypes[1];
    this.userTypes[1] = active;
  }
}
