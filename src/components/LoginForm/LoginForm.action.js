export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

// action creator

export function loginRequestAction() {
  return {
    type: LOGIN_REQUEST
  }
}

export function loginSuccessAction(result) {
  return {
    type: LOGIN_SUCCESS,
    payload: result
  }
}

export function loginFailureAction(error) {
  return {
    type: LOGIN_FAILURE,
    error
  }
}

// store.dispatch(loginRequestAction())