import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html'
})
export class FavoriteComponent {
  @Input('is-favorite') isFavorite: boolean;
  @Output() change = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite });
  }
}

// here's the lesson:
//    if you're building a reusable components,
//    give your input properties an alias to keep the contract of your component stable.
