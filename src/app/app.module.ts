import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { GuestBookComponent } from './components/guest-book/guest-book.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailedComponent } from './components/post-detailed/post-detailed.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentComponent } from './components/comment/comment.component';
import { GuestBookRecordComponent } from './components/guest-book-record/guest-book-record.component';
import { GuestBookFormComponent } from './components/guest-book-form/guest-book-form.component';
import { UserProfileDialogComponent } from './components/user-profile-dialog/user-profile-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { guestBookReducer } from './components/guest-book/guest-book.reducer';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostsComponent,
    GuestBookComponent,
    PostComponent,
    PostDetailedComponent,
    CommentComponent,
    GuestBookRecordComponent,
    GuestBookFormComponent,
    UserProfileDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ guestBook: guestBookReducer }),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
