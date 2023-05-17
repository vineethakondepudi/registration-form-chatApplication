import { TestBed } from '@angular/core/testing';

import { SavedUsersService } from './saved-users.service';

describe('SavedUsersService', () => {
  let service: SavedUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
