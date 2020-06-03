import { TestBed } from '@angular/core/testing';

import { ChatContactsService } from './chat-contacts.service';

describe('ChatContactsService', () => {
  let service: ChatContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
