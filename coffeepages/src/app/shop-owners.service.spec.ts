import { TestBed } from '@angular/core/testing';

import { ShopOwnersService } from './shop-owners.service';

describe('ShopOwnersService', () => {
  let service: ShopOwnersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopOwnersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
