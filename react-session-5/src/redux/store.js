import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import { authReducer } from "./reducers/authReducer";

const initialState = {
  auth: {
    loggedIn: false,
  },
};

let middleware = [];

if (process.env.NODE_ENV !== "production") {
  const logger = createLogger();
  middleware = [logger];
}

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export { store };
