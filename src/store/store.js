import { configureStore } from '@reduxjs/toolkit';
import { reducer as rootReducer } from './reducer';
// import { contactsReducer } from './Contacts/ContactSlice';
// import { filterReducer } from './Filter/FilterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for w

// // export const increment = createAction('myValye/increment');
// // const decrement = createAction('myValye/decrement');
// // console.log('increment', increment(100));
// const myValueSlice = createSlice({
//   name: 'myValue',
//   initialState: 100,
//   reducers: {
//     increment(state, action) {
//       return state + action.payload;
//     },
//   },
// });
// console.log('myValueSlice', myValueSlice);
// // const myReducer = createReducer(10, {
// //   [increment]: (state, action)
// //   [decrement]: (state, action) => state - action.payload,
// // });
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
// });
// export const { increment } = myValueSlice.actions;
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
