import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Post } from 'src/app/models/Post';
import { first } from 'rxjs';
import { PostComponent } from './post.component';

describe('Post Component', () => {
  it('should raise an event when the delete post is clicked',() => {
    const comp=new PostComponent();
    const post:Post = {id:1, title: 'hello',body: 'main content'};
    comp.post = post;
    comp.delete.pipe(first()).subscribe((selectedPost)=>{
      expect(selectedPost).toEqual(post);
    });
    comp.onDeletePost(new MouseEvent('click'));//ppassing some dummy data

  })
});
