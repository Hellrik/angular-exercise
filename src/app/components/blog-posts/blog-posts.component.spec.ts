import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostsComponent } from './blog-posts.component';
import { AppModule } from '../../app.module';
import { PostService } from '../../services/post.service';
import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

describe('BlogPostsComponent', () => {
  let component: BlogPostsComponent;
  let fixture: ComponentFixture<BlogPostsComponent>;
  const postServiceSpy = jasmine.createSpyObj('PostService', ['getAllPosts']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [BlogPostsComponent],
      providers: [{ provide: PostService, useValue: postServiceSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading state right after init', () => {
    postServiceSpy.getAllPosts.and.returnValue(of([{}]).pipe(delay(1)));
    fixture.detectChanges();

    expect(
      fixture.debugElement.nativeElement.getElementsByTagName('mat-spinner')
        .length
    ).toBe(1);
  });

  it('should hide loading after receiving posts', () => {
    postServiceSpy.getAllPosts.and.returnValue(of([{}]));
    fixture.detectChanges();

    expect(
      fixture.debugElement.nativeElement.getElementsByTagName('mat-spinner')
        .length
    ).toBe(0);
  });

  it('should show error if failed to receive posts', () => {
    postServiceSpy.getAllPosts.and.returnValue(throwError(''));
    fixture.detectChanges();

    expect(
      fixture.debugElement.nativeElement.getElementsByClassName('error-msg')
        .length
    ).toBe(1);
  });

  it('should show posts if received any', () => {
    const posts = [
      {
        userId: 1,
        id: 1,
        title: 'title1',
        body: 'body1',
      },
      {
        userId: 1,
        id: 2,
        title: 'title2',
        body: 'body2',
      },
    ];

    postServiceSpy.getAllPosts.and.returnValue(of(posts));
    fixture.detectChanges();

    expect(
      fixture.debugElement.nativeElement.getElementsByTagName('app-post').length
    ).toBe(posts.length);
  });
});
