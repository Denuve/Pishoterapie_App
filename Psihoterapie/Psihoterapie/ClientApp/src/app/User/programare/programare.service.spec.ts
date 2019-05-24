import { TestBed } from '@angular/core/testing';

import { ProgramareService } from './programare.service';

describe('ProgramareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgramareService = TestBed.get(ProgramareService);
    expect(service).toBeTruthy();
  });
});
