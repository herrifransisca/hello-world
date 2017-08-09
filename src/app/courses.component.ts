import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <h2>{{ title }}</h2>              // using interpolation
    <h2 [textContent]="title"></h2>   // using property binding

    <img src="{{ imageUrl }}" />      // using interpolation
    <img [src]="imageUrl" />          // using property binding
  `
})
export class CoursesComponent {
  title = 'List of Courses';
  imageUrl = 'http://lorempixel.com/400/200';
}
