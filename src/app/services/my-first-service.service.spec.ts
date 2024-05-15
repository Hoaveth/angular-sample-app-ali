import { TestBed } from '@angular/core/testing';

import { MyFirstService } from './my-first-service.service';

describe('MyFirstService', () => {
  let service: MyFirstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFirstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
