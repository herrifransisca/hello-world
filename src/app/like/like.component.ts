import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: false,
    likesCount: 0
  };

  constructor() { }

  toggle() {
    this.tweet.likesCount += this.tweet.isLiked ? -1 : 1;
    this.tweet.isLiked = !this.tweet.isLiked;
  }
}
