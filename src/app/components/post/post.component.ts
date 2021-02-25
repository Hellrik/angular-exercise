import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Post } from '../../types';
import { Router } from '@angular/router';
import { BLOG_POSTS_ROUTE } from '../../constants';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  @Input() data: Post | null = null;
  @Input() showActions = true;

  constructor(private router: Router) {}

  onCommentClick(): void {
    this.router.navigate([BLOG_POSTS_ROUTE, this.data?.id]);
  }
}
