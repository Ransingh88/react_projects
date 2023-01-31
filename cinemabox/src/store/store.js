import {configureStore} from '@reduxjs/toolkit'
import homeSlice from './features/home/homeSlice'

export const store = configureStore({
    reducer: {
        home:homeSlice
    }
})

