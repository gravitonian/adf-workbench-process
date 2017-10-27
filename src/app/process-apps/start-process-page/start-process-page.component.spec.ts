import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartProcessPageComponent } from './start-process-page.component';

describe('StartProcessPageComponent', () => {
  let component: StartProcessPageComponent;
  let fixture: ComponentFixture<StartProcessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartProcessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartProcessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
