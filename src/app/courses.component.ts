import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <h1>Courses</h1>
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `
})
export class CoursesComponent {
  title = 'List of Courses';
  courses = ['Course1', 'Course2', 'Course3'];

  getTitle() {
    return this.title;
  }
}

// note: selector: 'courses'  <courses>
// note: selector: '.courses' <div class="courses">
// note: selector: '#courses' <div id="courses">