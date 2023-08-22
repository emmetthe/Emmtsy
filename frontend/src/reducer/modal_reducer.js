import { OPEN_MODAL, CLOSE_MODAL } from '../action/modal_action'

export default function modalReducer(state = null, action) {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}