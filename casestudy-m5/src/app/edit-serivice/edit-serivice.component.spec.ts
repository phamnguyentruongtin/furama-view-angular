import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSeriviceComponent } from './edit-serivice.component';

describe('EditSeriviceComponent', () => {
  let component: EditSeriviceComponent;
  let fixture: ComponentFixture<EditSeriviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSeriviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSeriviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
