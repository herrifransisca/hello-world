import { Validators, FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course-form-3',
  templateUrl: './new-course-form-3.component.html',
  styleUrls: ['./new-course-form-3.component.css']
})
export class NewCourseForm3Component {
  form;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }
}
