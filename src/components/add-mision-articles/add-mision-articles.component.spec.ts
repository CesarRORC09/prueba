import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMisionArticlesComponent } from './add-mision-articles.component';

describe('AddMisionArticlesComponent', () => {
  let component: AddMisionArticlesComponent;
  let fixture: ComponentFixture<AddMisionArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMisionArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMisionArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
