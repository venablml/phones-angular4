import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/operator/map'

import { Phone } from '../phone'

@Injectable()
export class PhoneService {
  constructor(private http: Http) {}

  getPhones(): Observable<Phone[]> {
    return this.http.get('http://localhost:3000/api/phones').map(response => {
      return response.json()
    })
  }
}
