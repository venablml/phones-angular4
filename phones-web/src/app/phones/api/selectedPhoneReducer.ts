import { ActionReducer, Action } from '@ngrx/store'

export const SET_SELECTED_PHONE_ID = 'SET_SELECTED_PHONE_ID'

export class SelectPhoneIdAction implements Action {
  readonly type = SET_SELECTED_PHONE_ID

  constructor(public payload: number) {}
}

export function selectedPhoneReducer(state: number = null, action: Action) {
  switch (action.type) {
    case SET_SELECTED_PHONE_ID:
      return action.payload
    default:
      return state
  }
}

export type Actions = SelectPhoneIdAction
