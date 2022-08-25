import { TestBed } from '@angular/core/testing';

import { ClothesServiceService } from './clothes.service';

describe('ClothesServiceService', () => {
  let service: ClothesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClothesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
