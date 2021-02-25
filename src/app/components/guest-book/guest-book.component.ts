import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GuestBookRecord, StoreContent } from '../../types';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { addRecord } from './guest-book.actions';

@Component({
  selector: 'app-guest-book',
  templateUrl: './guest-book.component.html',
  styleUrls: ['./guest-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuestBookComponent {
  records$: Observable<GuestBookRecord[]>;

  constructor(private store: Store<StoreContent>) {
    this.records$ = store.select('guestBook');
  }

  onAddRecord(record: GuestBookRecord): void {
    this.store.dispatch(addRecord({ record }));
    // http call to server
  }
}
