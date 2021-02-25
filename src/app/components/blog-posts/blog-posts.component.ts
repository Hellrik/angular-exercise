import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../types';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPostsComponent implements OnInit {
  posts$ = new BehaviorSubject<Post[]>([]);
  loading$ = new BehaviorSubject(true);
  error$ = new BehaviorSubject(false);
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.retrieveAllPosts();
  }

  retrieveAllPosts(): void {
    this.loading$.next(true);
    this.error$.next(false);
    this.postService.getAllPosts().subscribe(
      (data: Post[]) => {
        this.loading$.next(false);
        this.posts$.next(data);
      },
      () => {
        this.loading$.next(false);
        this.error$.next(true);
      }
    );
  }
}
