import { Component } from '@angular/core'
import { Phone } from './phone'
import { PhoneService } from './phone.service'
import { OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { AppState } from '../app.module'
import { Observable } from 'rxjs/Observable'

import {
  SET_SELECTED_PHONE_ID,
  SelectPhoneIdAction
} from './api/selectedPhoneReducer'

import { REQUEST_PHONES } from './api/phonesReducer'

@Component({
  selector: 'phones-container',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css'],
  providers: [PhoneService]
})
export class PhoneListContainer {
  title = 'Phones '
  isFetching: false
  selectedPhone: Phone
  phones: Phone[]
  constructor(
    private phoneService: PhoneService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.store.select('phones').subscribe((data: any) => {
      console.log('Data =>', data.phones)
      this.phones = data.phones
    })
    this.store.select('phones').subscribe((data: any) => {
      console.log('isFetching =>', data.isFetching)
      this.isFetching = data.isFetching
    })
  }
  ngOnInit(): void {
    //this.getPhones()
    this.store.dispatch({ type: REQUEST_PHONES })
  }

  selectPhone(id): void {
    this.store.dispatch({ type: SET_SELECTED_PHONE_ID, payload: id })
    console.log('Dispatched action to set selected phone id')
    this.router.navigate(['/phones/' + id])
  }
}
