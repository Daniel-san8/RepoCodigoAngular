import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../models/user/user';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrl: './table-user.component.scss'
})
export class TableUserComponent {
  

  @Input({alias: 'users', required: true}) users: IUser[] = []
  @Output('nameDetailEmit') detailEmitter = new EventEmitter<string>()

  
  sendEmitter (name: string) {
    this.detailEmitter.emit(name)
  }
}
