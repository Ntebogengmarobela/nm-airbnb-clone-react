import { OPEN_MODAL, CLOSE_MODAL } from "../types/modalTypes";


const initialState = { openClose: "closed", content: "" };

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        openClose: action.payload.openClose,
        content: action.payload.content,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        openClose: "closed",
        content: "",
      };
    default:
      return state;
  }
};
