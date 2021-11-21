import { TestBed } from '@angular/core/testing';

import { NetworkMachineService } from './network-machine.service';

describe('NetworkMachineService', () => {
  let service: NetworkMachineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkMachineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
