import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyComponent } from './empty.component';

describe('EmptyComponentComponent', () => {
  let component: EmptyComponent;
  let fixture: ComponentFixture<EmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
