export interface StoreContent {
  guestBook: GuestBookRecord[];
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface User {
  id?: number;
  username: string;
  email: string;
  name: string;
  address: Address;
  phone: string;
  website: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface GuestBookRecord {
  user: User;
  message: string;
}
