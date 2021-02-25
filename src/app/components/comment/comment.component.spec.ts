import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentComponent } from './comment.component';
import { AppModule } from '../../app.module';
import { PostComment } from '../../types';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [CommentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render nothing if no comment in input', () => {
    component.comment = undefined;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.children.length).toBe(0);
  });

  it('should render comment', () => {
    const comment = {
      postId: 8,
      id: 36,
      name: 'sit et quis',
      email: 'Raheem_Heaney@gretchen.biz',
      body: 'text text text',
    };

    component.comment = comment;
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.children.length).toBe(1);
  });
});
