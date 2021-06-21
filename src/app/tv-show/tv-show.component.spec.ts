import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVSHOWComponent } from './tv-show.component';

describe('TVSHOWComponent', () => {
  let component: TVSHOWComponent;
  let fixture: ComponentFixture<TVSHOWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TVSHOWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TVSHOWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
