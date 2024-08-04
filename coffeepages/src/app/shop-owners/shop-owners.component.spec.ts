import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopOwnersComponent } from './shop-owners.component';

describe('ShopOwnersComponent', () => {
  let component: ShopOwnersComponent;
  let fixture: ComponentFixture<ShopOwnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopOwnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
