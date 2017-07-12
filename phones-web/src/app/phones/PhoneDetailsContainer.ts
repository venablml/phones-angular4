import { Component } from '@angular/core'
import { Phone } from './phone'
import { PhoneService } from './phone.service'
import { OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import { AppState } from '../app.module'

@Component({
  selector: 'phone-details',
  templateUrl: './phone-details.html',
  styleUrls: ['./phone-details.css'],
  providers: [PhoneService]
})
export class PhoneDetailsContainer implements OnInit, OnDestroy {
  phone: Phone
  id: number
  selectedId: number
  private sub: any

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'] // (+) converts string 'id' to a number
      this.store.select('phones').subscribe((data: any) => {
        this.phone = data.phones.find(phone => phone.id == this.id)
      })
    })
  }
  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
