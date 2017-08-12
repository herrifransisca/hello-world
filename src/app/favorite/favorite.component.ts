import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent {
  @Input('is-favorite') isFavorite: boolean;
  @Output('change') click = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.click.emit({ newValue: this.isFavorite });
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}

// here's the lesson: 
//    * the default encapsulation is emulated, which emulate the shadow dom
//    * for 99.9% of the cases, you don't want to change this. 
