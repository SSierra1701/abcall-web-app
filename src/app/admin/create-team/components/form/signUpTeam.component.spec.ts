import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SignUpTeamComponent } from './signUpTeam.component';
import { Observable, of } from 'rxjs';
import { selectIsLoading, selectIsSubmitting, selectServerError } from '../../store/signUpTeamReducer';
import { signUpTeamActions } from '../../store/signUpTeamActions';
import { ServerErrorI } from '../../../../share/types/ServerErrorI';

describe('SignUpCollabComponent', () => {
  let component: SignUpTeamComponent;
  let fixture: ComponentFixture<SignUpTeamComponent>;
  let storeSpy: jasmine.SpyObj<Store>;

  beforeEach(async () => {
    // Crea un espía para el store
    storeSpy = jasmine.createSpyObj('Store', ['dispatch', 'select']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, SignUpTeamComponent], // Cambiado a imports
      providers: [
        { provide: Store, useValue: storeSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpTeamComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with the correct controls', () => {
    expect(component.form.contains('name')).toBeTrue();
    expect(component.form.contains('email')).toBeTrue();
    expect(component.form.contains('password')).toBeTrue();
    expect(component.form.contains('cPassword')).toBeTrue();
  });

  it('should require a minimum length for the name', () => {
    const control = component.form.get('name');
    control?.setValue('abc');
    expect(control?.valid).toBeFalse();
  });

  it('should validate email format', () => {
    const control = component.form.get('email');
    control?.setValue('invalidEmail');
    expect(control?.valid).toBeFalse();
  });

  it('should validate password', () => {
    const control = component.form.get('password');
    control?.setValue('1234');
    expect(control?.valid).toBeFalse(); // Min length fails
    control?.setValue('123456');
    expect(control?.valid).toBeTrue();
  });

  it('should validate that passwords match', () => {
    component.form.get('password')?.setValue('password123');
    component.form.get('cPassword')?.setValue('password1234'); // Not matching
    expect(component.form.errors?.['passwordMatch']).toBeTruthy();
    
    component.form.get('cPassword')?.setValue('password123'); // Matching
    expect(component.form.errors?.['passwordMatch']).toBeFalsy();
  });

  it('should dispatch signUp action on valid form submission', () => {
    spyOn(component, 'onSubmit').and.callThrough();
    
    // Set form values
    component.form.get('name')?.setValue('John Doe');
    component.form.get('email')?.setValue('john.doe@example.com');
    component.form.get('password')?.setValue('password123');
    component.form.get('cPassword')?.setValue('password123');

    component.onSubmit();

    expect(storeSpy.dispatch).toHaveBeenCalledWith(signUpTeamActions.signUp({
      request: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123',
      }
    }));
  });

  it('should not dispatch action if form is invalid', () => {
    component.onSubmit();
    expect(storeSpy.dispatch).not.toHaveBeenCalled();
  });

});
