import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState{
    subject: string;
    query: string;
}

const initialState: SearchState = {
    subject: '',
    query: '',
  };

  const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
      setSubject: (state, action: PayloadAction<string>) => {
        state.subject = action.payload;
      },
      setQuery: (state, action: PayloadAction<string>) => {
        state.query = action.payload;
      },
    },
  });
  
  export const { setSubject, setQuery } = searchSlice.actions;
  export default searchSlice.reducer;