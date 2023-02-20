import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixComponent } from './fix.component';

describe('FixComponent', () => {
  let component: FixComponent;
  let fixture: ComponentFixture<FixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
