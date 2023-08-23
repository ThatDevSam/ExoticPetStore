import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchInfo: '',
    },
    reducers: {
        //Update global state with new search info.
        updateSearchInfo: (state, action) => {
            state.searchInfo = action.payload
        }

    }
})

export const {updateSearchInfo} = searchSlice.actions

export default searchSlice.reducer