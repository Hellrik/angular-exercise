import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import { AppModule } from '../../app.module';
import { Router } from '@angular/router';
import { BLOG_POSTS_ROUTE } from '../../constants';

describe('PostComponent', () => {
  const postData = {
    userId: 1,
    id: 1,
    title: 'title',
    body: 'body',
  };
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [PostComponent],
      providers: [{ provide: Router, useValue: routerSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to detailed post page on comment icon click', () => {
    component.data = postData;
    component.showActions = true;

    fixture.detectChanges();

    const button = fixture.debugElement.nativeElement.querySelector('button');

    button.click();
    expect(routerSpy.navigate).toHaveBeenCalledWith([
      BLOG_POSTS_ROUTE,
      postData.id,
    ]);
  });
});
