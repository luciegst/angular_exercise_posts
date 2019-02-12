import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  lastUpdate = new Date();
  loveIts: number = 0;

  @Input() postTitle: string;
  @Input() postContent: string;
  
  
  constructor() {

  }


  onLike() {
    this.loveIts += 1
  }

  onDislike() {
    this.loveIts -= 1
  }


  ngOnInit() {
  }

}
