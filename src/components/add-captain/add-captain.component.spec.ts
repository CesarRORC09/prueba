import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCaptainComponent } from './add-captain.component';

describe('AddCaptainComponent', () => {
  let component: AddCaptainComponent;
  let fixture: ComponentFixture<AddCaptainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCaptainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCaptainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
