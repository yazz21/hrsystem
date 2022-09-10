import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCompanyDialogboxComponent } from './delete-company-dialogbox.component';

describe('DeleteCompanyDialogboxComponent', () => {
  let component: DeleteCompanyDialogboxComponent;
  let fixture: ComponentFixture<DeleteCompanyDialogboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCompanyDialogboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCompanyDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
