import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessAppsDetailsPageComponent } from './process-apps-details-page.component';

describe('ProcessAppsDetailsPageComponent', () => {
  let component: ProcessAppsDetailsPageComponent;
  let fixture: ComponentFixture<ProcessAppsDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessAppsDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessAppsDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
