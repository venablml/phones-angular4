import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'

import { Effect, Actions } from '@ngrx/effects'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'

import {
  REQUEST_PHONES,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILURE,
  FetchPhonesSuccessAction
} from './phonesReducer'
import { PhoneService } from './phoneService'

@Injectable()
export class PhoneEffects {
  constructor(private actions$: Actions, private phoneService: PhoneService) {}

  @Effect()
  loadPhones$ = this.actions$
    .ofType(REQUEST_PHONES)
    .switchMap(() =>
      this.phoneService
        .getPhones()
        .map(phones => new FetchPhonesSuccessAction(phones))
    )
}
//dispatch({type:FETCH_PHONES_SUCCESS,payload:phones})
