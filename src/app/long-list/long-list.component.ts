import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-long-list',
  templateUrl: './long-list.component.html',
  styleUrls: ['./long-list.component.css']
})
export class LongListComponent implements OnInit {
  listForm = this.fb.group({
    company: ['', Validators.required],
    project: ['', Validators.required],
    date: ['', Validators.required],
    file: ['', Validators.required],
  })
  
  constructor(private fb: FormBuilder, private _snack: MatSnackBar) {}

  ngOnInit() {

  }

  uploadExcelFile(event){
      console.log(event);
      document.getElementById("fileInput").click();
  }

  generateLongList() {
    if (this.listForm.valid) {
      console.log(JSON.stringify(this.listForm.value));
    } else {
      this._snack.open("Double-check the form", "Close", { duration: 5000 });
      Object.keys(this.listForm.controls).forEach(field => {
        const control = this.listForm.get(field);
        control.markAsTouched({ onlySelf: true });
      })
    }
  }
}