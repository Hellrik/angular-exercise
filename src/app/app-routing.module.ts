import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { GuestBookComponent } from './components/guest-book/guest-book.component';
import { BLOG_POSTS_ROUTE, GUEST_BOOK_ROUTE } from './constants';
import { PostDetailedComponent } from './components/post-detailed/post-detailed.component';

const routes: Routes = [
  {
    path: BLOG_POSTS_ROUTE,
    component: BlogPostsComponent,
  },
  {
    path: GUEST_BOOK_ROUTE,
    component: GuestBookComponent,
  },
  {
    path: `${BLOG_POSTS_ROUTE}/:id`,
    component: PostDetailedComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: BLOG_POSTS_ROUTE },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
