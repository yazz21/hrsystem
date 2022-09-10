import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFaceComponent } from './news-face.component';

describe('NewsFaceComponent', () => {
  let component: NewsFaceComponent;
  let fixture: ComponentFixture<NewsFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
