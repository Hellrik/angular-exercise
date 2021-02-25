import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestBookComponent } from './guest-book.component';
import { AppModule } from '../../app.module';

describe('GuestBookComponent', () => {
  let component: GuestBookComponent;
  let fixture: ComponentFixture<GuestBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [GuestBookComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
