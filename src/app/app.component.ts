import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // task = {
  //   title: 'Review applications',
  //   assignee: {
  //     name: 'John Smith'
  //   }
  // };

  // there is a case that assignee is null (loading.... waiting for server or anything)
  task = {
    title: 'Review applications',
    assignee: {
      name: null
    }
  };
}
