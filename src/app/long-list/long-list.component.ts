import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-long-list',
  templateUrl: './long-list.component.html',
  styleUrls: ['./long-list.component.css']
})
export class LongListComponent implements OnInit {
  listForm;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  // fourthFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {


  }

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.fb.group({
      thirdCtrl: ['', Validators.required]
    });
    // this.fourthFormGroup = this._formBuilder.group({
    //   fourthCtrl: ['', Validators.required]
    // });
  }

  uploadExcelFile(event){
      console.log(event);
      document.getElementById("fileInput").click();
  }

  generateLongList(event) {
    console.log(event)
    
  }
}