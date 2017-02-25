import { TestBed, inject } from '@angular/core/testing';
import { HamstersService } from './hamsters.service';

describe('HamstersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HamstersService]
    });
  });

  it('should ...', inject([HamstersService], (service: HamstersService) => {
    expect(service).toBeTruthy();
  }));
});
