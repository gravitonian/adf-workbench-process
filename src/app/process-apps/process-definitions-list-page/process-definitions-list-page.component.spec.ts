import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessDefinitionsListPageComponent } from './process-definitions-list-page.component';

describe('ProcessDefinitionsListPageComponent', () => {
  let component: ProcessDefinitionsListPageComponent;
  let fixture: ComponentFixture<ProcessDefinitionsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessDefinitionsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessDefinitionsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
