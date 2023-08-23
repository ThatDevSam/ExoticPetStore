import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
      baseUrl: 'http://localhost:5000',
   }),
   endpoints: builder => ({
    getFeaturedProducts: builder.query({
        query: (numOfProducts) => {
            return `/api/v1/products/featured?lim=${numOfProducts}`
        }
    }),
    getSingleProduct: builder.query({
        query: (productID) => {
            // is it ID or productID
            return `/api/v1/products/${productID}`
        }
    }),
    getSingleProductImage: builder.query({
        query: (imgUrl) => {
            return `${imgUrl}`
        }
    }),
    getProducts: builder.query({
        query: (searchParams) => {
            return `/api/v1/products?${searchParams}`
        }
    })
    
   })
})

export const {
    useGetFeaturedProductsQuery, 
    useGetSingleProductQuery, 
    useGetSingleProductImageQuery,
    useGetProductsQuery,
} = apiSlice