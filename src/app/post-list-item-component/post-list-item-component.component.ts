import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  lastUpdate = new Date();

  @Input() postTitle: string;
  @Input() postContent: string;


  constructor() { }

  onLike() {
    console.log('One more like');
  }

  onDislike() {
    console.log('One more dislike')
  }



  ngOnInit() {
  }

}
