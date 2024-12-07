import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://192.168.1.102:3001/";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // Payments
    createPaymentIntent: builder.mutation({
      query: (data) => ({
        url: "stripe/intent",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreatePaymentIntentMutation } = apiSlice;
