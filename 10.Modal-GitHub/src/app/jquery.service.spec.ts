/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JqueryService } from './jquery.service';

describe('JqueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JqueryService]
    });
  });

  it('should ...', inject([JqueryService], (service: JqueryService) => {
    expect(service).toBeTruthy();
  }));
});
