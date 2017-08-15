import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses;

  LoadCourses() {
    this.courses = [
      { id: 1, name: 'Course 1' },
      { id: 1, name: 'Course 2' },
      { id: 1, name: 'Course 3' }
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
