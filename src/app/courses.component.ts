import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <input (keyup)="onKeyUp($event)" />
  `
})
export class CoursesComponent {
  onKeyUp($event) {
    if ($event.keyCode === 13) {
      console.log('ENTER was pressed');
    }
  }
}
