import { TestBed, inject } from '@angular/core/testing';

import { EmployeesServiceMongoDB } from './employees.service';

describe('EmployeesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeesServiceMongoDB]
    });
  });

  it('should be created', inject([EmployeesServiceMongoDB], (service: EmployeesServiceMongoDB) => {
    expect(service).toBeTruthy();
  }));
});
