import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompanyDialogboxComponent } from './add-company-dialogbox.component';

describe('AddCompanyDialogboxComponent', () => {
  let component: AddCompanyDialogboxComponent;
  let fixture: ComponentFixture<AddCompanyDialogboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCompanyDialogboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompanyDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
