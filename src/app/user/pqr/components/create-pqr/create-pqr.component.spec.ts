import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePqrComponent } from './create-pqr.component';

describe('CreatePqrComponent', () => {
  let component: CreatePqrComponent;
  let fixture: ComponentFixture<CreatePqrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePqrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
