import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  // constructor(http: Http) {    -> http only accessible in the constructor, use "private" so it can be used outside constructor
  constructor(private http: Http) {
  }

  ngOnInit(): void {
    this.http.get(this.url)
      .subscribe(response => {
        this.posts = response.json();
      });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
      });
  }

  updatePost(post) {
    // what's the differece between "patch" & "put"
    // patch = sebagian property
    // put = semua property

    // when to use patch and put ?
    // pertama, check dulu apakah "API" nya support patch apa gak ? 
    //      kalau di course mosh yang aspnetcore angular, 
    //      itu gak support patch, support nya "put", karna semua object)
    // kalau support, pilih patch, karna bisa improve "slight performance"
    // this.http.patch(this.url, JSON.stringify({ isRead: true }));
    // this.http.put(this.url, JSON.stringify(post));

    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .subscribe(response => {
        console.log(response.json());
      });
  }

  deletePost(post) {
    this.http.delete(this.url + '/' + post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }
}
