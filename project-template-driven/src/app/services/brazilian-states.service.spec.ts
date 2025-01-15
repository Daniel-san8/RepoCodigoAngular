import { TestBed } from '@angular/core/testing';

import { BrazilianStatesService } from './brazilian-states.service';

describe('BrazilianStatesService', () => {
  let service: BrazilianStatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrazilianStatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
