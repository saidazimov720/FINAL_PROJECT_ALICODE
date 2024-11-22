import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Media } from './mediaApi';

interface MediaState {
  filteredItems: Media[];
}

const initialState: MediaState = {
  filteredItems: [],
};

const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    filterMedia: (state, action: PayloadAction<{ items: Media[]; subject: string; query: string }>) => {
      const { items, subject, query } = action.payload;
      state.filteredItems = items.filter(
        (media) =>
          (subject === 'All' || media.subject.includes(subject)) &&
          media.title.toLowerCase().includes(query.toLowerCase())
      );
    },
  },
});

export const { filterMedia } = mediaSlice.actions;
export default mediaSlice.reducer;
