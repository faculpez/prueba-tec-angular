import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPhoneComponent } from './form-phone.component';

describe('FormPhoneComponent', () => {
  let component: FormPhoneComponent;
  let fixture: ComponentFixture<FormPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
