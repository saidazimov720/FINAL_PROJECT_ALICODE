import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Media {
  id: string;
  title: string;
  subject: string;
  url: string;
}

export const mediaApi = createApi({
  reducerPath: 'mediaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.mocked-media-platform.com' }),
  endpoints: (builder) => ({
    getMedia: builder.query<Media[], void>({
      query: () => '/media',
    }),
  }),
});

export const { useGetMediaQuery } = mediaApi;
