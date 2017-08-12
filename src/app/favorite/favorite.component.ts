import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html'
})
export class FavoriteComponent {
  @Input('is-favorite') isFavorite: boolean;
  // here's the lesson: 
  //    if you're building a reusable components, 
  //    give your input properties an alias to keep the contract of your component stable.

  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}
