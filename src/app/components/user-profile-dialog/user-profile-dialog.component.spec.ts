import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileDialogComponent } from './user-profile-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppModule } from '../../app.module';

describe('UserProfileDialogComponent', () => {
  const userData = {
    id: 1,
    username: 'username',
    email: 'email',
    name: 'name',
    address: {
      street: 'street',
      suite: 'suite',
      city: 'city',
      zipcode: 'zipcode',
    },
    phone: 'phone',
    website: 'website',
  };
  let component: UserProfileDialogComponent;
  let fixture: ComponentFixture<UserProfileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [UserProfileDialogComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: userData,
        },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render content if user passed', () => {
    component.user = userData;
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.children.length).toBe(1);
  });

  it('should render nothing if user is not passed', () => {
    component.user = undefined;
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.children.length).toBe(0);
  });
});
