
import { of } from "rxjs/internal/observable/of";
import { Post } from "src/app/models/Post";
import { PostsComponent } from "./posts.component";

describe('Posts Component', () => {
    let POSTS:Post[];
    let component:PostsComponent;
    let mockPostService:any;
    beforeEach(() => {
        POSTS=[
            {
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
              },
              {
                "id": 2,
                "title": "excepturi optio reprehenderit",
                "body": "expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
              },
              {
                "id": 3,
                "title": "provident occaecati excepturi optio reprehenderit",
                "body": "precusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
              },

        ];
        mockPostService=jasmine.createSpyObj(['getPosts','deletePost'])
        component=new PostsComponent(mockPostService);
    });
    describe('delete',() => {
        it('should delete the selected Post from the posts',() => {
            mockPostService.deletePost.and.returnValue(of(true));
            component.posts=POSTS;
            component.delete(POSTS[1]);
            expect(component.posts.length).toBe(2);
        });
        it('should call the delete method in Post Service only once', () => {
            mockPostService.deletePost.and.returnValue(of(true));
            component.posts=POSTS;
            component.delete(POSTS[1]);
            expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
        });
        it('should delete the actual selected post in Posts', () =>{
            mockPostService.deletePost.and.returnValue(of(true));
            component.posts=POSTS;
            component.delete(POSTS[1]);
            for(let post of component.posts){
                expect(post).not.toEqual(POSTS[1]);
            }
        })
    })
  
    

})