import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <input (keyup.enter)="onKeyUp($event)" />
  `
})
export class CoursesComponent {
  onKeyUp($event) {
    console.log($event.target.value);
  }
}
