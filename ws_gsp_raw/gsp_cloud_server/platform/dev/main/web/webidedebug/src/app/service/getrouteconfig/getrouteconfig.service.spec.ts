import { TestBed, inject } from '@angular/core/testing';

import { GetrouteconfigService } from './getrouteconfig.service';

describe('GetrouteconfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetrouteconfigService]
    });
  });

  it('should be created', inject([GetrouteconfigService], (service: GetrouteconfigService) => {
    expect(service).toBeTruthy();
  }));
});
