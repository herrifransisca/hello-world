import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    {{ course.title | uppercase  | lowercase }} <br/>
    {{ course.students | number }} <br/>
    {{ course.rating | number:'2.2-2' }} <br/>
    {{ course.price | currency:'AUD':true:'3.2-2' }} <br/>
    {{ course.releaseDate | date:'shortDate' }}
  `
})
export class CoursesComponent {
  course = {
    title: 'The Complete Angular Course',
    students: 30123,
    rating: 4.9745,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };
}
