import { TestBed } from '@angular/core/testing';

import { RevisarService } from './revisar.service';

describe('RevisarService', () => {
  let service: RevisarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevisarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
