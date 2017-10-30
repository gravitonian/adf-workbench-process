import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTasksDetailsPageComponent } from './my-tasks-details-page.component';

describe('MyTasksDetailsPageComponent', () => {
  let component: MyTasksDetailsPageComponent;
  let fixture: ComponentFixture<MyTasksDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTasksDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTasksDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
