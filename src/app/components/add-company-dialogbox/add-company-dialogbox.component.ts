import { Component, Inject } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { CompanyDataItem } from "src/app/model/company.model";
import { CompanyService } from "src/app/services/company.service";

@Component({
  selector: 'app-add-company-dialogbox',
  templateUrl: './add-company-dialogbox.component.html',
  styleUrls: ['./add-company-dialogbox.component.css']
})
export class AddCompanyDialogboxComponent {
  newName;
  profileForm: FormGroup;
  constructor(
    private componetService: CompanyService,
    public dialogRef: MatDialogRef<AddCompanyDialogboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CompanyDataItem,
  ) {
    console.log(this.data);

    this.profileForm = new FormGroup({
      name: new FormControl(this.data.name),
      id: new FormControl(this.data.id)
    });
  }

  onNoClick() {
    // this.dialogRef.close();
    this.componetService.modifyCompany(this.profileForm.value)
  }


}
