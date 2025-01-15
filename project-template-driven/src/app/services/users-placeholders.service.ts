import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersPlaceholdersService {

  constructor(private readonly _httpClient: HttpClient) { }

  getUsersPlaceholder () {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/users')
  }
}
