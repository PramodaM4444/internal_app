import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { persistReducer, persistStore } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import { cartReducer } from "./reducers/cartReducer";
import loadingReducer from "./reducers/loadingReducer";
import { userReducer } from "./reducers/userReducer";
import { timesheetReducer } from "./reducers/timesheetReducer";
import { viewTimesheetReducer } from "./reducers/viewTimesheetReducer";
import { loginReducer } from "./reducers/loginReducer";
import { rootSaga } from "./rootSaga";
import { logoutActionTypes } from "./actionTypes/logoutActionTypes";
import { errorReducer as errors } from "./reducers/errorReducer";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: "root",
    storage: storageSession,
    whitelist: ["loginReducer"],
};

const appReducer = combineReducers({
    loadingReducer,
    cartReducer,
    userReducer,
    timesheetReducer,
    viewTimesheetReducer,
    loginReducer,
    errors,
});

const rootReducer = (state: any, action: any) => {
    if (action.type === logoutActionTypes.LOGOUT) {
        state = undefined;
    }
    return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: false,
            serializableCheck: false,
        }).concat(sagaMiddleware),
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
