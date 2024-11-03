import { Component, Input } from '@angular/core';
import { IUser } from '../../models/user/user';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrl: './detail-user.component.scss'
})
export class DetailUserComponent {
 @Input() userDetail?: IUser 
  entriesArr: [string, any][] = []
 getValue () {
  if(!this.userDetail) return null
  const pairObj = Object.entries(this.userDetail)
  this.entriesArr = pairObj
  console.log(this.entriesArr)
  return pairObj
 }
}
