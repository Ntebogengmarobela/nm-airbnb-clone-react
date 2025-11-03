import { LISTING_LIST_REQUEST, LISTING_LIST_SUCCESS, LISTING_LIST_FAIL } from "../types/listingTypes";

const initialState = {
  listings: [],
  loading: false,
  error: null,
};

export const listingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case LISTING_LIST_REQUEST:
      return { ...state, loading: true };
    case LISTING_LIST_SUCCESS:
      return { loading: false, listings: action.payload, error: null };
    case LISTING_LIST_FAIL:
      return { loading: false, listings: [], error: action.payload };
    default:
      return state;
  }
};
