import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessAppsListPageComponent } from './process-apps-list-page.component';

describe('ProcessAppsListPageComponent', () => {
  let component: ProcessAppsListPageComponent;
  let fixture: ComponentFixture<ProcessAppsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessAppsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessAppsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
