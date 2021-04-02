import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelTypeComponent } from './appel-type.component';

describe('AppelTypeComponent', () => {
  let component: AppelTypeComponent;
  let fixture: ComponentFixture<AppelTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppelTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppelTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
