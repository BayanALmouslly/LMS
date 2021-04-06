import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEducationalUnitComponent } from './add-educational-unit.component';

describe('AddEducationalUnitComponent', () => {
  let component: AddEducationalUnitComponent;
  let fixture: ComponentFixture<AddEducationalUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEducationalUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEducationalUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
