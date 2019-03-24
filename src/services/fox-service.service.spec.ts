import { TestBed, inject } from '@angular/core/testing';

import { FoxServiceService } from './fox-service.service';

describe('FoxServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoxServiceService]
    });
  });

  it('should be created', inject([FoxServiceService], (service: FoxServiceService) => {
    expect(service).toBeTruthy();
  }));
});
