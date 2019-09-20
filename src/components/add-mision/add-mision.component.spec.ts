import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMisionComponent } from './add-mision.component';

describe('AddMisionComponent', () => {
  let component: AddMisionComponent;
  let fixture: ComponentFixture<AddMisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
