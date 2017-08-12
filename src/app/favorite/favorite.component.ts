import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  inputs: ['isFavorite']
})
export class FavoriteComponent {
  isFavorite: boolean;

  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}
