import { TestBed } from '@angular/core/testing';

import { ChatApplicationService } from './chat-application.service';

describe('ChatApplicationService', () => {
  let service: ChatApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
