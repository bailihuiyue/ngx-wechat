import { TestBed, inject } from '@angular/core/testing';

import { GetUsersService } from './get-users.service';

describe('GetUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetUsersService]
    });
  });

  it('should be created', inject([GetUsersService], (service: GetUsersService) => {
    expect(service).toBeTruthy();
  }));
});
