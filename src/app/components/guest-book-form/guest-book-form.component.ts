import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GuestBookRecord } from '../../types';

@Component({
  selector: 'app-guest-book-form',
  templateUrl: './guest-book-form.component.html',
  styleUrls: ['./guest-book-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuestBookFormComponent {
  @Output() addRecord = new EventEmitter<GuestBookRecord>();

  formGroup: FormGroup;
  username = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('');
  city = new FormControl('');
  phone = new FormControl('');
  website = new FormControl('');
  message = new FormControl('', [
    Validators.required,
    Validators.minLength(20),
  ]);

  constructor() {
    this.formGroup = new FormGroup({
      message: this.message,
      website: this.website,
      phone: this.phone,
      email: this.email,
      name: this.name,
      username: this.username,
      city: this.city,
    });
  }

  onAddRecord(): void {
    this.formGroup.updateValueAndValidity();

    if (this.formGroup.valid) {
      this.addRecord.emit({
        message: this.message.value,
        user: {
          website: this.website.value,
          phone: this.phone.value,
          email: this.email.value,
          name: this.name.value,
          username: this.username.value,
          address: {
            city: this.city.value,
            street: '',
            suite: '',
            zipcode: '',
          },
        },
      });
    }
  }
}
