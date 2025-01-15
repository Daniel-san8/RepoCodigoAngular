import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly usersList = [
    {
      name: 'Usuario 1',
      username: 'usuario 1',
      email: 'usuario@example.com',
      password: 'senha1',
      birthDate: '01/12/1998',
      state: 13,
      musics: [
        {
          title: 'Música 1', band: 'Banda A', genre: 8, isFavorite: false
        },
        {
          title: 'Música 2', band: 'Banda B', genre: 11, isFavorite: false
        },
        {
          title: 'Música 3', band: 'Banda C', genre: 9, isFavorite: true
        }
      ]
    },

    {
      name: 'Usuario 2',
      username: 'usuario 2',
      email: 'usuario@example.com',
      password: 'senha1',
      birthDate: '01/12/1998',
      state: 13,
      musics: [
        {
          title: 'Música 3', band: 'Banda D', genre: 1, isFavorite: false
        },
        {
          title: 'Música 4', band: 'Banda E', genre: 7, isFavorite: true
        },
        {
          title: 'Música 5', band: 'Banda F', genre: 12, isFavorite: false
        }
      ]
    },

    {
      name: 'Usuario 3',
      username: 'usuario 3',
      email: 'usuario@example.com',
      password: 'senha1@#11111',
      birthDate: '01/12/1998',
      state: 13,
      musics: [
        {
          title: 'Música 7', band: 'Banda Z', genre: 8, isFavorite: true
        },
        {
          title: 'Música 8', band: 'Banda Y', genre: 11, isFavorite: false
        },
        {
          title: 'Música 9', band: 'Banda X', genre: 9, isFavorite: false
        }
      ]
    }
  ]
  constructor() { }
}
