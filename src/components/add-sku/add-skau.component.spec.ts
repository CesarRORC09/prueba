import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkauComponent } from './add-skau.component';

describe('AddSkauComponent', () => {
  let component: AddSkauComponent;
  let fixture: ComponentFixture<AddSkauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSkauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSkauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
