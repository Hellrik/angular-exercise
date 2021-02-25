import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { User } from '../../types';
import { getUserAvatar } from '../../utils/common';
import { MatDialog } from '@angular/material/dialog';
import { UserProfileDialogComponent } from '../user-profile-dialog/user-profile-dialog.component';

@Component({
  selector: 'app-guest-book-record',
  templateUrl: './guest-book-record.component.html',
  styleUrls: ['./guest-book-record.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuestBookRecordComponent implements OnInit {
  @Input() user?: User;
  @Input() message?: string;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  getAvatar(): string {
    return this.user ? getUserAvatar(this.user.email) : '';
  }

  openUserProfileDialog(): void {
    this.dialog.open(UserProfileDialogComponent, {
      data: this.user,
    });
  }
}
