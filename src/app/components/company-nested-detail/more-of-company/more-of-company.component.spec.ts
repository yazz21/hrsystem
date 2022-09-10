import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreOfCompanyComponent } from './more-of-company.component';

describe('MoreOfCompanyComponent', () => {
  let component: MoreOfCompanyComponent;
  let fixture: ComponentFixture<MoreOfCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreOfCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreOfCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
