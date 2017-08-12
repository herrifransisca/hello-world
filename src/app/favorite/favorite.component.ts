import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
})
export class FavoriteComponent {
  @Input() isFavorite: boolean;

  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}
