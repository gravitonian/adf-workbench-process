import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProcessesDetailsPageComponent } from './my-processes-details-page.component';

describe('MyProcessesDetailsPageComponent', () => {
  let component: MyProcessesDetailsPageComponent;
  let fixture: ComponentFixture<MyProcessesDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProcessesDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProcessesDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
