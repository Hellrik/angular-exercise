import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailedComponent } from './post-detailed.component';
import { ActivatedRoute } from '@angular/router';
import { AppModule } from '../../app.module';
import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { PostService } from '../../services/post.service';

describe('PostDetailedComponent', () => {
  let component: PostDetailedComponent;
  let fixture: ComponentFixture<PostDetailedComponent>;
  const postServiceSpy = jasmine.createSpyObj('PostService', [
    'getPost',
    'getPostComments',
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [PostDetailedComponent],
      providers: [
        { provide: PostService, useValue: postServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {
                id: '1',
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailedComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show spinner for post and for comments right after init', () => {
    postServiceSpy.getPost.and.returnValue(of({}).pipe(delay(1)));
    postServiceSpy.getPostComments.and.returnValue(of([{}]).pipe(delay(1)));
    fixture.detectChanges();

    expect(
      fixture.debugElement.nativeElement.getElementsByTagName('mat-spinner')
        .length
    ).toBe(2);
  });

  it('should hide post spinner after receiving posts', () => {
    postServiceSpy.getPost.and.returnValue(of({}));
    postServiceSpy.getPostComments.and.returnValue(of([{}]).pipe(delay(1)));
    fixture.detectChanges();
    expect(
      fixture.debugElement.nativeElement.getElementsByTagName('mat-spinner')
        .length
    ).toBe(1);
  });

  it('should hide comments spinner after receiving comments', () => {
    postServiceSpy.getPostComments.and.returnValue(of([]));
    postServiceSpy.getPost.and.returnValue(of({}).pipe(delay(1)));

    fixture.detectChanges();

    expect(
      fixture.debugElement.nativeElement.getElementsByTagName('mat-spinner')
        .length
    ).toBe(1);
  });

  it('should show error if failed to load post', () => {
    postServiceSpy.getPost.and.returnValue(throwError(''));
    postServiceSpy.getPostComments.and.returnValue(of([{}]).pipe(delay(1)));
    fixture.detectChanges();

    expect(
      fixture.debugElement.nativeElement.getElementsByClassName('error-msg')
        .length
    ).toBe(1);
  });

  it('should show error if failed to load comments', () => {
    postServiceSpy.getPostComments.and.returnValue(throwError(''));
    postServiceSpy.getPost.and.returnValue(of({}).pipe(delay(1)));
    fixture.detectChanges();

    expect(
      fixture.debugElement.nativeElement.getElementsByClassName('error-msg')
        .length
    ).toBe(1);
  });
});
