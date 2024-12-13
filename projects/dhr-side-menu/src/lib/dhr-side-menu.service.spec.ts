import { TestBed } from '@angular/core/testing';

import { DhrSideMenuService } from './dhr-side-menu.service';

describe('DhrSideMenuService', () => {
  let service: DhrSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DhrSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
