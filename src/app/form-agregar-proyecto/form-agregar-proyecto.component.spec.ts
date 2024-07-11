import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgregarProyectoComponent } from './form-agregar-proyecto.component';

describe('FormAgregarProyectoComponent', () => {
  let component: FormAgregarProyectoComponent;
  let fixture: ComponentFixture<FormAgregarProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAgregarProyectoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAgregarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
