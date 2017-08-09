import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <h1>Courses</h1>
    <h2>{{ title }}</h2>
    <h2>{{ getTitle() }}</h2>
  `
})
export class CoursesComponent {
  title = 'List of Courses';

  getTitle() {
    return this.title;
  }
}

// note: selector: 'courses'  <courses>
// note: selector: '.courses' <div class="courses">
// note: selector: '#courses' <div id="courses">