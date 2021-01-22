
const handlers = {
  DEFAULT: state=> state
}

export const firebaseReducer = (state, action) =>{
  hanndle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}