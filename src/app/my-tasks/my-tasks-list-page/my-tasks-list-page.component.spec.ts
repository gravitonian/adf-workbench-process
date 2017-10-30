import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTasksListPageComponent } from './my-tasks-list-page.component';

describe('MyTasksListPageComponent', () => {
  let component: MyTasksListPageComponent;
  let fixture: ComponentFixture<MyTasksListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTasksListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTasksListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
