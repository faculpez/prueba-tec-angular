import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFixComponent } from './form-fix.component';

describe('FormFixComponent', () => {
  let component: FormFixComponent;
  let fixture: ComponentFixture<FormFixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
