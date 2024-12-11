import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice'
import themeReducer from './theme'

const store = configureStore({
    reducer: {
      counter: counterReducer,
      theme: themeReducer,
    }
  })

export default store;
