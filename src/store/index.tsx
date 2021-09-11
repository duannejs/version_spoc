import { applyMiddleware, compose, createStore } from '@reduxjs/toolkit'
import rootReducer from './ducks/rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './ducks/rootSaga'

const appReducer = (state: any, action: any) => {
    if (action.type === 'LOGOUT_USER') {
      state = undefined;
      console.log('\x1b[33mLOGOUT USER');
    }
  
    return rootReducer(state, action);
  };

const sagaMiddleware = createSagaMiddleware()
const store = createStore(appReducer, compose(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default { store }
