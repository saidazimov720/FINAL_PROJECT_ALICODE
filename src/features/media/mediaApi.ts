import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Media {
  id: string;
  title: string;
  subject: string;
  description?: string;
  url: string;
}

export const mediaApi = createApi({
  reducerPath: 'mediaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://youtube-v31.p.rapidapi.com/search' }), 
  endpoints: (builder) => ({
    getMedia: builder.query<Media[], void>({
      query: () => '/media',
    }),

    getMediaById: builder.query<Media, string>({
      query: (id) => `/media/${id}`,
    }),
  }),
});

export const { useGetMediaQuery, useGetMediaByIdQuery } = mediaApi;
