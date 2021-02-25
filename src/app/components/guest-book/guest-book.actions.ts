import { createAction, props } from '@ngrx/store';
import { GuestBookRecord } from '../../types';

export const addRecord = createAction(
  '[Guest Book] Add Record',
  props<{ record: GuestBookRecord }>()
);
