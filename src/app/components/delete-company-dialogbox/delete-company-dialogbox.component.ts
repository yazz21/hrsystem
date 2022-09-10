import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CompanyDataItem } from 'src/app/model/company.model';

@Component({
  selector: 'app-delete-company-dialogbox',
  templateUrl: './delete-company-dialogbox.component.html',
  styleUrls: ['./delete-company-dialogbox.component.css']
})
export class DeleteCompanyDialogboxComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteCompanyDialogboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CompanyDataItem,
  ) { }

  ngOnInit() {
  }

  onClick(isyes): void {
    if (isyes) {
      this.dialogRef.close(true)
      

    }
    else {
      this.dialogRef.close(false)
    }
  }
    

}
