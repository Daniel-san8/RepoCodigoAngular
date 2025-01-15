import { TestBed } from '@angular/core/testing';

import { UsersPlaceholdersService } from './users-placeholders.service';

describe('UsersPlaceholdersService', () => {
  let service: UsersPlaceholdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersPlaceholdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
