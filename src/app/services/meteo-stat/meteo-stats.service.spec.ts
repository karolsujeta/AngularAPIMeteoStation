import { TestBed } from '@angular/core/testing';

import { MeteoStatsService } from './meteo-stats.service';

describe('MeteoStatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeteoStatsService = TestBed.get(MeteoStatsService);
    expect(service).toBeTruthy();
  });
});
