import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProcessesPageComponent } from './my-processes-page.component';

describe('MyProcessesPageComponent', () => {
  let component: MyProcessesPageComponent;
  let fixture: ComponentFixture<MyProcessesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProcessesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProcessesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
