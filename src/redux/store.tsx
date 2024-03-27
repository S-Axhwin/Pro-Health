import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slice/userSlice'
import appReducer from './slice/appointSlice'
const store:any = configureStore({
    reducer: {
        'user': userReducer,
        'app': appReducer
    }
})

export default store