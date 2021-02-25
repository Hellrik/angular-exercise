import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, PostComment } from '../../types';
import { PostService } from '../../services/post.service';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-post-detailed',
  templateUrl: './post-detailed.component.html',
  styleUrls: ['./post-detailed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailedComponent implements OnInit {
  post$ = new BehaviorSubject<Post | null>(null);
  loadingPost$ = new BehaviorSubject(true);
  loadingPostError$ = new BehaviorSubject(false);
  comments$ = new BehaviorSubject<PostComment[]>([]);
  loadingComments$ = new BehaviorSubject(true);
  loadingCommentsError$ = new BehaviorSubject(false);

  constructor(
    private actualRouter: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    const id = this.actualRouter.snapshot.params.id;
    this.loadPost(id);
    this.loadComments(id);
  }

  loadPost(id: number): void {
    this.loadingPost$.next(true);
    this.loadingPostError$.next(false);
    this.postService
      .getPost(id)
      .pipe(
        finalize(() => {
          this.loadingPost$.next(false);
        })
      )
      .subscribe(
        (data: Post) => {
          this.loadingPost$.next(false);
          this.post$.next(data);
        },
        () => {
          this.loadingPost$.next(false);
          this.loadingPostError$.next(true);
        }
      );
  }

  loadComments(id: number): void {
    this.loadingComments$.next(true);
    this.loadingCommentsError$.next(false);
    this.postService.getPostComments(id).subscribe(
      (data: PostComment[]) => {
        this.loadingComments$.next(false);
        this.comments$.next(data);
      },
      () => {
        this.loadingComments$.next(false);
        this.loadingCommentsError$.next(true);
      }
    );
  }
}
