import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import {thunk} from "redux-thunk";
import { listingListReducer } from "./reducers/listingReducers";
import { modalReducer, } from "./reducers/modalReducers";
import { userLoginReducer } from "./reducers/userReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({ listingList: listingListReducer, modal: modalReducer, userLogin: userLoginReducer });

const userInfoFromLS = localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem("userInfo")) : null

const initialState = {
  userLogin: { userInfo: userInfoFromLS },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
