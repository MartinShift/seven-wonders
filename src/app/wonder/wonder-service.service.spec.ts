import { TestBed } from '@angular/core/testing';

import { WondersService } from './wonder-service.service';

describe('WonderServiceService', () => {
  let service: WondersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WondersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
