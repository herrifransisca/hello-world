import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <img [src]="imageUrl" />                  // using property binding
    <table>
      <tr>
        // <td [colspan]="colSpan"></td>      // Error, because "td" doesn't have a PROPERTY called colspan
        // solution:
        <td [attr.colspan]="colSpan"></td>   // using attribute binding
      </tr>
    </table>

    // note: "property binding" uses "PROPERTY of DOM"
    //       "attribute binding" uses "ATTRIBUTE of HTML"
  `
})
export class CoursesComponent {
  imageUrl = '';
  colSpan = 2;
}
