import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    url: {},
    genres: {},
    languages:[]

}

export const homeSlice = createSlice({

    name: 'home',
    initialState,
    reducers: {
        getApiConfigurations: (state, action) => {
            state.url = action.payload
        },
        getGenres: (state, action) => {
            state.genres = action.payload
        },
        getLanguages: (state, action) => {
            state.languages = action.payload
        }
    }
})

export const {getApiConfigurations,getGenres,getLanguages} = homeSlice.actions
export default homeSlice.reducer