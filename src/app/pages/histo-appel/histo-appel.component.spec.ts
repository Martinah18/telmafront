import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoAppelComponent } from './histo-appel.component';

describe('HistoAppelComponent', () => {
  let component: HistoAppelComponent;
  let fixture: ComponentFixture<HistoAppelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoAppelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoAppelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
