import { TestBed, inject } from '@angular/core/testing';

import { CatServiceService } from './cat-service.service';

describe('CatServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatServiceService]
    });
  });

  it('should be created', inject([CatServiceService], (service: CatServiceService) => {
    expect(service).toBeTruthy();
  }));
});
