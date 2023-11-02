import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  BASE_HEADER_XRAPID_API_HOST,
  BASE_HEADER_XRAPID_API_KEY,
  BASE_URL,
  PROPERTIES_LIST_URL,
} from 'react-native-config';
import type { PropertiesListResponse } from './types';

export const propertiesApi = createApi({
  reducerPath: 'propertiesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: {
      'X-RapidAPI-Key': BASE_HEADER_XRAPID_API_KEY,
      'X-RapidAPI-Host': BASE_HEADER_XRAPID_API_HOST,
    },
  }),
  endpoints: builder => ({
    getProperties: builder.query<PropertiesListResponse, void>({
      query: () => {
        return {
          url: PROPERTIES_LIST_URL,
          params: {
            offset: '10',
            arrival_date: '2023-11-15',
            departure_date: '2023-11-17',
            guest_qty: '1',
            dest_ids: '-3712125',
            room_qty: '1',
            search_type: 'city',
            children_qty: '2',
            children_age: '5,7',
            search_id: 'none',
            price_filter_currencycode: 'USD',
            order_by: 'popularity',
            languagecode: 'en-us',
            travel_purpose: 'leisure',
          },
        };
      },
      transformResponse: (rawResult: { result: PropertiesListResponse }) => {
        return rawResult.result;
      },
    }),
  }),
});

export const { useGetPropertiesQuery } = propertiesApi;
