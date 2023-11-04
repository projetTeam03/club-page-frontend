import { createStore, combineReducers, applyMiddleware } from "redux";
import upload from "./modules/upload";

import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import postRecruit from "./modules/recruit/postRecruit";

const logger = createLogger();

const rootReducer = combineReducers({
  postRecruit,
  upload,
});

const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));

export default store;
