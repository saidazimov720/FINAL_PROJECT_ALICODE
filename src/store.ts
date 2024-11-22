import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './features/search/searchSlice';
import mediaReducer from './features/media/mediaSlice';
import { mediaApi } from './features/media/mediaApi';

const store = configureStore({
  reducer: {
    search: searchReducer,
    media: mediaReducer,
    [mediaApi.reducerPath]: mediaApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mediaApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
