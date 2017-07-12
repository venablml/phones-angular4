import { ActionReducer, Action } from '@ngrx/store'
import { Phone } from '../phone'

export const REQUEST_PHONES = 'REQUEST_PHONES'
export const FETCH_PHONES_SUCCESS = 'FETCH_PHONES_SUCCESS'
export const FETCH_PHONES_FAILURE = 'FETCH_PHONES_FAILURE'

export class RequestPhonesAction implements Action {
  readonly type = REQUEST_PHONES
}
export class FetchPhonesSuccessAction implements Action {
  readonly type = FETCH_PHONES_SUCCESS

  constructor(public payload: Phone[]) {}
}

export class FetchPhonesFailureAction implements Action {
  readonly type = FETCH_PHONES_FAILURE

  constructor(public payload: string) {}
}
const initialState = {
  isFetching: false,
  phones: [],
  error: null
}
export function phonesReducer(state = initialState, action: Action) {
  switch (action.type) {
    case REQUEST_PHONES:
      return Object.assign({}, state, { isFetching: true, error: null })
    case FETCH_PHONES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload
      })
    case FETCH_PHONES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        phones: action.payload
      })
    default:
      return state
  }
}

export type Actions =
  | RequestPhonesAction
  | FetchPhonesSuccessAction
  | FetchPhonesFailureAction
