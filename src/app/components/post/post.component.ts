import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }
  @Input() post:Post | undefined;
  @Output() delete=new EventEmitter<Post>();

  ngOnInit(): void {
  }
  onDeletePost(event:Event){
    event.stopPropagation();
    this.delete.emit(this.post);
  }
}
