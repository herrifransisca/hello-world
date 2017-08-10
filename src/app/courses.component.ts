import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <div (click)="onDivClicked()">
      <button (click)="onSave($event)">Save</button>
    </div>
  `
})
export class CoursesComponent {
  isActive = true;

  onDivClicked() {
    console.log('Div was clicked');
  }

  onSave($event) {
    $event.stopPropagation();
    console.log('Button was clicked', $event);
  }
}
