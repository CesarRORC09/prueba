import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptainSComponent } from './captain-s.component';

describe('CaptainSComponent', () => {
  let component: CaptainSComponent;
  let fixture: ComponentFixture<CaptainSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptainSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptainSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
