import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  userslist: any = []
  genresList: any = []
  constructor (private readonly _usersService: UsersService, private readonly _genresService: GenresService) {}

  ngOnInit(): void {
    this.getUsers()
    this.getGenres()
  }

  private getUsers () {
    this._usersService.getUsers().subscribe(usersListResponse => {
      this.userslist = usersListResponse
    })
  }

  private getGenres () {
    this._genresService.getGenres().subscribe(listGenres => {
      this.genresList = listGenres
    })
  }
}
