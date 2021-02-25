import { Action, createReducer, on } from '@ngrx/store';
import { addRecord } from './guest-book.actions';
import { GuestBookRecord } from '../../types';

export const initialState: GuestBookRecord[] = [
  {
    user: {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
    },
    message: 'Face to face bifurcated interface',
  },
  {
    user: {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
      },
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
    },
    message: 'Face to face bifurcated interface',
  },
  {
    user: {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      address: {
        street: 'Douglas Extension',
        suite: 'Suite 847',
        city: 'McKenziehaven',
        zipcode: '59590-4157',
      },
      phone: '1-463-123-4447',
      website: 'ramiro.info',
    },
    message: 'Face to face bifurcated interface',
  },
];

const _guestBookReducer = createReducer(
  initialState,
  on(addRecord, (state: GuestBookRecord[], { record }) => [record, ...state])
);

export function guestBookReducer(
  state: GuestBookRecord[] | undefined,
  action: Action
): GuestBookRecord[] {
  return _guestBookReducer(state, action);
}
