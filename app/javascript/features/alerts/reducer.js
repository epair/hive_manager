export default function alertsReducer(state = { message: '', error: false }, action) {
  switch(action.type) {
    case 'alerts/setAlert':
      return { ...state, message: action.error.message, error: true }
    case 'alerts/clearAlert':
    default:
      return { ...state, message: '', error: false }
  }
}

export const clearAlert = () => {
  return {
    type: 'alerts/clearAlert'
  }
}

export const setAlert = (err) => {
  return {
    type: 'alerts/setAlert',
    error: err
  }
}
