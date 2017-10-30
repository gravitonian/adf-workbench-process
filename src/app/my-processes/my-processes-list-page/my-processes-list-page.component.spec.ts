import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProcessesListPageComponent } from './my-processes-list-page.component';

describe('MyProcessesListPageComponent', () => {
  let component: MyProcessesListPageComponent;
  let fixture: ComponentFixture<MyProcessesListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProcessesListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProcessesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
