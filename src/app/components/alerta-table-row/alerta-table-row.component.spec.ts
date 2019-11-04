import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaTableRowComponent } from './alerta-table-row.component';

describe('AlertaTableRowComponent', () => {
  let component: AlertaTableRowComponent;
  let fixture: ComponentFixture<AlertaTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertaTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertaTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
