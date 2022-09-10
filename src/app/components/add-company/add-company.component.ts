import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent {

  profileForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('',  [Validators.required, Validators.maxLength(40)]),
    department: new FormControl('',  [Validators.required]),
    // logo: new FormControl('', [Validators.required]),
    description: new FormControl('',  [Validators.required, Validators.maxLength(100)])
  });



  constructor(private companyService: CompanyService,) { }

  selected = "Developers";
  fileInput;
  file: File | null = null;

  onSubmit() {
    console.log(this.profileForm.value);

    this.companyService.addCompany(this.profileForm.value);
  }

  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }

  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.profileForm.controls[controlName].hasError(errorName);
  }

}
