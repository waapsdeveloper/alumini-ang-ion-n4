import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DolLayoutPage } from './dol-layout.page';

describe('DolLayoutPage', () => {
  let component: DolLayoutPage;
  let fixture: ComponentFixture<DolLayoutPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DolLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
