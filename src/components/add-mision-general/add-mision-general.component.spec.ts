import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMisionGeneralComponent } from './add-mision-general.component';

describe('AddMisionGeneralComponent', () => {
  let component: AddMisionGeneralComponent;
  let fixture: ComponentFixture<AddMisionGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMisionGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMisionGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
