/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { GameoflifeService } from './gameoflife.service';

describe('Service: Gameoflife', () => {
  beforeEach(() => {
    addProviders([GameoflifeService]);
  });

  it('should ...',
    inject([GameoflifeService],
      (service: GameoflifeService) => {
        expect(service).toBeTruthy();
      }));
});
