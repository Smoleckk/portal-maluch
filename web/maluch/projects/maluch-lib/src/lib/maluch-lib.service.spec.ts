import { TestBed } from '@angular/core/testing';

import { MaluchLibService } from './maluch-lib.service';

describe('MaluchLibService', () => {
  let service: MaluchLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaluchLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
