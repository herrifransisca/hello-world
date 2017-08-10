import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    {{ text | summary:10 }}
  `
})
export class CoursesComponent {
  text = `
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi ut totam odio eveniet maiores, voluptatum eum optio nisi aperiam dols!
  `;
}
