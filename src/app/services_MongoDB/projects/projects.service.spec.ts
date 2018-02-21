import { TestBed, inject } from '@angular/core/testing';

import { ProjectsServiceMongoDB } from './projects.service';

describe('ProjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectsServiceMongoDB]
    });
  });

  it('should be created', inject([ProjectsServiceMongoDB], (service: ProjectsServiceMongoDB) => {
    expect(service).toBeTruthy();
  }));
});
