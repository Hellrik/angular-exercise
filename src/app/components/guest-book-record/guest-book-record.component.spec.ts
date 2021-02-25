import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestBookRecordComponent } from './guest-book-record.component';
import { AppModule } from '../../app.module';

describe('GuestBookRecordComponent', () => {
  let component: GuestBookRecordComponent;
  let fixture: ComponentFixture<GuestBookRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [GuestBookRecordComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestBookRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
