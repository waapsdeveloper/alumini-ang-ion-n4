import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserEventsPage } from './user-events.page';

describe('UserEventsPage', () => {
  let component: UserEventsPage;
  let fixture: ComponentFixture<UserEventsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
