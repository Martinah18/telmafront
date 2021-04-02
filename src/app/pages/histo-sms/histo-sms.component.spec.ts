import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoSmsComponent } from './histo-sms.component';

describe('HistoSmsComponent', () => {
  let component: HistoSmsComponent;
  let fixture: ComponentFixture<HistoSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoSmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
