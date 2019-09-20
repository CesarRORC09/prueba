import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuSComponent } from './sku-s.component';

describe('SkuSComponent', () => {
  let component: SkuSComponent;
  let fixture: ComponentFixture<SkuSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkuSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
