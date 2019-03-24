import { TestBed, inject } from '@angular/core/testing';

import { ShibeServiceService } from './shibe-service.service';

describe('ShibeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShibeServiceService]
    });
  });

  it('should be created', inject([ShibeServiceService], (service: ShibeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
