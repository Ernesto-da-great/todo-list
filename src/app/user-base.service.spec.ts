import { TestBed } from '@angular/core/testing';

import { UserBaseService } from './user-base.service';

describe('UserBaseService', () => {
  let service: UserBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
