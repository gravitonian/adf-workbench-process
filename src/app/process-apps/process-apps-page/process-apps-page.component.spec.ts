import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessAppsPageComponent } from './process-apps-page.component';

describe('ProcessAppsPageComponent', () => {
  let component: ProcessAppsPageComponent;
  let fixture: ComponentFixture<ProcessAppsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessAppsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessAppsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
