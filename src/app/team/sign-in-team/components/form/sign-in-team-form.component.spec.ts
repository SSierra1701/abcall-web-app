import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInTeamFormComponent } from './sign-in-form.component';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('SignInCollaboratorFormComponent', () => {
  let component: SignInTeamFormComponent;
  let fixture: ComponentFixture<SignInTeamFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, SignInTeamFormComponent],
      providers: [
        provideMockStore({}),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: {} },
            params: of({})
          }
        }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SignInTeamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Añadido para asegurar que se detecten los cambios
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with two controls', () => {
    expect(component.form.contains('email')).toBeTrue();
    expect(component.form.contains('password')).toBeTrue();
  });

  it('should mark email as invalid if empty', () => {
    const emailControl = component.form.get('email');
    emailControl?.setValue('');
    expect(emailControl?.valid).toBeFalse();
  });

  it('should mark password as invalid if empty', () => {
    const passwordControl = component.form.get('password');
    passwordControl?.setValue('');
    expect(passwordControl?.valid).toBeFalse();
  });

  it('should mark email as invalid if it is not a valid email', () => {
    const emailControl = component.form.get('email');
    emailControl?.setValue('invalidEmail');
    expect(emailControl?.valid).toBeFalse();
  });

  it('should mark password as invalid if it is less than 6 characters', () => {
    const passwordControl = component.form.get('password');
    passwordControl?.setValue('12345');
    expect(passwordControl?.valid).toBeFalse();
  });

  it('should mark the form as valid when all fields are correct', () => {
    component.form.setValue({
      email: 'test@example.com',
      password: 'password123'
    });
    expect(component.form.valid).toBeTrue();
  });

  it('should dispatch signIn action on form submit if form is valid', () => {
    component.form.setValue({
      email: 'test@example.com',
      password: 'password123'
    });
    
    spyOn(component['store'], 'dispatch'); // Espía el método dispatch de la tienda
    component.onSubmit(); // Llama al método onSubmit
    expect(component['store'].dispatch).toHaveBeenCalled(); // Verifica que se llamó a dispatch
  });

  it('should not dispatch signIn action on form submit if form is invalid', () => {
    component.form.setValue({
      email: '',
      password: ''
    });

    spyOn(component['store'], 'dispatch'); // Espía el método dispatch de la tienda
    component.onSubmit(); // Llama al método onSubmit
    expect(component['store'].dispatch).not.toHaveBeenCalled(); // Verifica que no se llamó a dispatch
  });

  it('should show error message if email is invalid', () => {
    const emailControl = component.form.get('email');
    emailControl?.setValue('invalidEmail');
    emailControl?.markAsTouched();
    fixture.detectChanges(); // Detectar cambios para reflejar el estado actualizado en el HTML

    const errorMessage = fixture.nativeElement.querySelector('.error-message'); // Asegúrate de que el selector coincida con tu HTML
    expect(errorMessage).toBeTruthy(); // Verifica que se muestre un mensaje de error
  });

  it('should show error message if password is too short', () => {
    const passwordControl = component.form.get('password');
    passwordControl?.setValue('12345');
    passwordControl?.markAsTouched();
    fixture.detectChanges(); // Detectar cambios para reflejar el estado actualizado en el HTML

    const errorMessage = fixture.nativeElement.querySelector('.error-message'); // Asegúrate de que el selector coincida con tu HTML
    expect(errorMessage).toBeTruthy(); // Verifica que se muestre un mensaje de error
  });

  it('should display a loader when isLoading$ is true', () => {
    component.data$ = of({
      isSubmitting$: false,
      isLoading$: true,
      serverError$: null,
    });
    fixture.detectChanges(); // Detectar cambios para reflejar el estado actualizado en el HTML

    const loaderElement = fixture.nativeElement.querySelector('loader-c');
    expect(loaderElement).toBeTruthy(); // Verifica que se muestre el loader
  });

  it('should display a server error message if serverError$ is present', () => {
    const serverError = { message: 'Server error occurred' };
    component.data$ = of({
      isSubmitting$: false,
      isLoading$: false,
      serverError$: serverError,
    });
    fixture.detectChanges(); // Detectar cambios para reflejar el estado actualizado en el HTML

    const errorMessageElement = fixture.nativeElement.querySelector('.error-main');
    expect(errorMessageElement).toBeTruthy(); // Verifica que se muestre el mensaje de error del servidor
  });
});
