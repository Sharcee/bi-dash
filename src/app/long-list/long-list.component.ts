import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
// import { UploadService } from '../upload.service';


@Component({
  selector: 'app-long-list',
  templateUrl: './long-list.component.html',
  styleUrls: ['./long-list.component.css']
})
export class LongListComponent implements OnInit {
  error: string;
  uploadResponse = { status: '', message: '', filePath: '' };

  listForm = this.fb.group({
    company: ['', Validators.required],
    project: ['', Validators.required],
    date: ['', Validators.required],
    file: ['', Validators.required],
  })

  // private uploadService: UploadService
  constructor(private fb: FormBuilder, private _snack: MatSnackBar ) { }

  ngOnInit() {

  }

  uploadExcelFile(event) {
    console.log(event);
    // const formData = new FormData();
    // formData.append('file', this.listForm.get('file').value);

    // this.uploadService.upload(formData).subscribe( 
    //   (res) => this.uploadResponse = res,
    //   (err) => this.error = err 
    // );
  }

  downloadFile() {
    let link = document.createElement("a");
    link.download = "Company_PROJECT_N 4 LL for Upload_MM.DD.YY.xlsx";
    link.href = "../../assets/Company_PROJECT_N 4 LL for Upload_06.19.19.xlsx"
    link.click();
  }

  // onFileChange(event) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.listForm.get('file').setValue(file);
  //   }
  // }


  generateLongList() {
    if (this.listForm.valid) {
      console.log(JSON.stringify(this.listForm.value));
      this.listForm.reset()
    } else {
      this._snack.open("Double-check the form", "Close", { duration: 5000 });
      Object.keys(this.listForm.controls).forEach(field => {
        const control = this.listForm.get(field);
        control.markAsTouched({ onlySelf: true });
      })
    }
  }
}