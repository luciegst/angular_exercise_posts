import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {


  posts = [
    {
      title: 'Mon premier post',
      content: 'Reprehenderit fugiat pariatur pariatur commodo labore ea commodo eiusmod Lorem nisi do. Ullamco id do excepteur laborum sunt amet nostrud sit aliquip ea. Quis mollit sunt aliqua laborum et Lorem enim nostrud proident. Ex aliqua incididunt magna ad occaecat laboris enim voluptate laboris ad velit culpa aliqua non. Enim qui ex laboris deserunt labore Lorem cupidatat.',
    },
    {
      title: 'Mon deuxième post',
      content: 'Reprehenderit fugiat pariatur pariatur commodo labore ea commodo eiusmod Lorem nisi do. Ullamco id do excepteur laborum sunt amet nostrud sit aliquip ea. Quis mollit sunt aliqua laborum et Lorem enim nostrud proident. Ex aliqua incididunt magna ad occaecat laboris enim voluptate laboris ad velit culpa aliqua non. Enim qui ex laboris deserunt labore Lorem cupidatat.',
    },
    {
      title: 'Encore un post',
      content: 'Reprehenderit fugiat pariatur pariatur commodo labore ea commodo eiusmod Lorem nisi do. Ullamco id do excepteur laborum sunt amet nostrud sit aliquip ea. Quis mollit sunt aliqua laborum et Lorem enim nostrud proident. Ex aliqua incididunt magna ad occaecat laboris enim voluptate laboris ad velit culpa aliqua non. Enim qui ex laboris deserunt labore Lorem cupidatat.',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
