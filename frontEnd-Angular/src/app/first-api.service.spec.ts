import { TestBed } from '@angular/core/testing';

import { FirstApiService } from './first-api.service';

describe('FirstApiService', () => {
  let service: FirstApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
