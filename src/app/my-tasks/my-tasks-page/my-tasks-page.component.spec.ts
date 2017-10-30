import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTasksPageComponent } from './my-tasks-page.component';

describe('MyTasksPageComponent', () => {
  let component: MyTasksPageComponent;
  let fixture: ComponentFixture<MyTasksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTasksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTasksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
