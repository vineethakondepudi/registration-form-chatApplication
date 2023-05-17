import { TestBed } from '@angular/core/testing';

import { SelectedNameService } from './selected-name.service';

describe('SelectedNameService', () => {
  let service: SelectedNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
