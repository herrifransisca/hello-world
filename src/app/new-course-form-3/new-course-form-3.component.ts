import { Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course-form-3',
  templateUrl: './new-course-form-3.component.html',
  styleUrls: ['./new-course-form-3.component.css']
})
export class NewCourseForm3Component {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([])
  });
}
