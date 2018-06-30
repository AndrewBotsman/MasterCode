import { TestBed, inject } from '@angular/core/testing';

import { DataFetcher } from './data-fetcher.service';

describe('DataFetcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataFetcher]
    });
  });

  it('should be created', inject([DataFetcher], (service: DataFetcher) => {
    expect(service).toBeTruthy();
  }));
});
