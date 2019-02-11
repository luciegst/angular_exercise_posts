import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;

  postOne = 'Mon premier post';
  postTwo = 'Mon deuxième post';
  postThree = 'Encore un post';

  constructor() { }

  ngOnInit() {
  }

}
