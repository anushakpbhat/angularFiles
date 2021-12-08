import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavsbarComponent } from './navsbar.component';

describe('NavsbarComponent', () => {
  let component: NavsbarComponent;
  let fixture: ComponentFixture<NavsbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavsbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavsbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
