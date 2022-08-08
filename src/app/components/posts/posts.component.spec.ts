
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs/internal/observable/of";
import { Post } from "src/app/models/Post";
import { PostService } from "src/app/services/Post/post.service";
import { PostsComponent } from "./posts.component";


  describe('Posts Component', () => {
    let POSTS: Post[];
    let component: PostsComponent;
    let mockPostService: any;
    let fixture:ComponentFixture<PostsComponent>;
  
    beforeEach(() => {
      POSTS = [
        {
          id: 1,
          body: 'body 1',
          title: 'title 1',
        },
        {
          id: 2,
          body: 'body 2',
          title: 'title 2',
        },
        {
          id: 3,
          body: 'body 3',
          title: 'title 3',
        },
      ];
  
      mockPostService = jasmine.createSpyObj(['getPosts', 'deletePost']);
  
      TestBed.configureTestingModule({
        declarations:[PostsComponent],
        providers: [
          {
            provide: PostService,
            useValue: mockPostService,
          },
        ],
      });
  
      fixture = TestBed.createComponent(PostsComponent);
      //this will not create a component, but a fixture 
      component = fixture.componentInstance;

    });
  
    describe('delete', () => {
      beforeEach(() => {
        mockPostService.deletePost.and.returnValue(of(true));
        component.posts = POSTS;
      });
      it('should set posts from the service directly',()=>{
        mockPostService.getPosts.and.returnValue(of(POSTS));
        //whenever thsi test case calles the getPosts, it will return
        // the POSTS as Observable
        // but how will the compiler understand this change.
        fixture.detectChanges();
        // this will help the compiler to understand that some changes rae being made
        expect(component.posts.length).toBe(3);
      })
      it('should delete the selected Post from the posts', () => {
        component.delete(POSTS[1]);
  
        expect(component.posts.length).toBe(2);
      });
  
      it('should delete the actual selected Post in Posts', () => {
        component.delete(POSTS[1]);
  
        for (let post of component.posts) {
          expect(post).not.toEqual(POSTS[1]);
        }
      });
  
      it('should call the delete method in Post Service only once', () => {
        component.delete(POSTS[1]);
        expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
      });
    });
  });