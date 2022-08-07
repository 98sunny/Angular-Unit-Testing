import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Post } from 'src/app/models/Post';
import { first } from 'rxjs';
import { PostComponent } from './post.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Post Component', () => {
  let comp:PostComponent;
  let fixture:any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent],
      schemas: [NO_ERRORS_SCHEMA]
      // this will supress any eror coming in the console
    });
    fixture = TestBed.createComponent(PostComponent);
    comp=fixture.componentInstance;
    //we will need comp so that we can access the post input 
  })
  it('should raise an event when the delete post is clicked',() => {
    const comp=new PostComponent();
    const post:Post = {id:1, title: 'hello',body: 'main content'};
    comp.post = post;
    comp.delete.pipe(first()).subscribe((selectedPost)=>{
      expect(selectedPost).toEqual(post);
    });
    comp.onDeletePost(new MouseEvent('click'));//ppassing some dummy data

  })
  it('should render the post title in the a tag element',() => {
    const post:Post = {id:1, title: 'hello',body: 'main content'};
    comp.post=post;
    //above, we are adding the post in the @input post element of the component using comp
    fixture.detectChanges();
    // this will update the template with the latest changes dones in the html element
    const postElement:HTMLElement=fixture.nativeElement;
    //now in this nativeElement, we have to search the a element
    const a=postElement.querySelector('a');
    expect(a?.textContent).toContain(post.title);
  })
});
