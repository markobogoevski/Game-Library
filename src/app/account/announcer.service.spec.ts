import { TestBed } from '@angular/core/testing';

import { AnnouncerService } from './announcer.service';

describe('AnnouncerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnnouncerService = TestBed.get(AnnouncerService);
    expect(service).toBeTruthy();
  });
});
