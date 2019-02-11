import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  postOne = 'Mon premier post';
  postTwo = 'Mon deuxième post';
  postThree = 'Encore un post';
  
  constructor() { }

  ngOnInit() {
  }

}
