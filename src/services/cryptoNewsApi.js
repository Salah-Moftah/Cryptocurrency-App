import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  'X-Api-Key' : 'b467736fa06c446888db63606d7ee57f'
}

const baseUrl = 'https://newsapi.org/v2/'

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, pageSize }) =>
      createRequest(`everything?q=${newsCategory}&pageSize=${pageSize}&language=en&sortBy=relevancy`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;