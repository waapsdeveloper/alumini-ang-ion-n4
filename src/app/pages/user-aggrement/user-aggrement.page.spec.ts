import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAggrementPage } from './user-aggrement.page';

describe('UserAggrementPage', () => {
  let component: UserAggrementPage;
  let fixture: ComponentFixture<UserAggrementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAggrementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
