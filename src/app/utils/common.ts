import * as md5 from 'md5';

export function getUserAvatar(email: string, size = 40): string {
  return `https://www.gravatar.com/avatar/${md5(
    email.trim().toLowerCase()
  )}?s=${size}`;
}
