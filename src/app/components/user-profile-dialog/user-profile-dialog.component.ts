import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { User } from '../../types';
import { getUserAvatar } from '../../utils/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-profile-dialog',
  templateUrl: './user-profile-dialog.component.html',
  styleUrls: ['./user-profile-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public user?: User) {}

  ngOnInit(): void {}

  getAvatar(): string {
    return this.user ? getUserAvatar(this.user.email, 80) : '';
  }
}
