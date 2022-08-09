
import { Component, Input } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { of } from "rxjs/internal/observable/of";
import { Post } from "src/app/models/Post";
import { PostService } from "src/app/services/Post/post.service";
import { PostComponent } from "../post/post.component";
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
        declarations:[PostsComponent,PostComponent],
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
    it('should create one post child elemnet for each post',()=>{
      mockPostService.getPosts.and.returnValue(of(POSTS));
      fixture.detectChanges();
      const debugElement=fixture.debugElement;
      fixture.detectChanges();
      const postsElement=debugElement.queryAll(By.css('.posts'))
      expect(postsElement.length).toBe(POSTS.length);
      
    });
   describe('Posts component',()=>{
    it('should set posts from the service directly',()=>{
      mockPostService.getPosts.and.returnValue(of(POSTS));
      //whenever thsi test case calles the getPosts, it will return
      // the POSTS as Observable
      // but how will the compiler understand this change.
      fixture.detectChanges();
      // this will help the compiler to understand that some changes rae being made
      expect(component.posts.length).toBe(3);
    });
    it('should create exact number of Post componenet with PostComponent',()=>{
      mockPostService.getPosts.and.returnValue(of(POSTS));
      // this will call the ngOnInit method for both parents and child
      fixture.detectChanges();
      // In angular, by default componenet is considered as a directive
      const postComponentDEs=fixture.debugElement.queryAll(By.directive(PostComponent));
      // now we have the debug elements
      expect(postComponentDEs.length).toBe(POSTS.length);

    });

    it('should check whether exact post is sending to PostCompoenent',()=>{
      mockPostService.getPosts.and.returnValue(of(POSTS));
      fixture.detectChanges();
      const postComponentDEs=fixture.debugElement.queryAll(
        By.directive(PostComponent)
        );
        for(let i=0;i<postComponentDEs.length;i++){
          let postComponentInstance=postComponentDEs[i].componentInstance as PostComponent;
      expect(postComponentInstance.post?.title).toBe(POSTS[i].title);
        }
 
    });
   })
  
    describe('delete', () => {
      beforeEach(() => {
        mockPostService.deletePost.and.returnValue(of(true));
        component.posts = POSTS;
      });
      
      
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