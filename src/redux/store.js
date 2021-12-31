// npm install @reduxjs/toolkit react-redux
// npm install redux-thunk
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { client } from './reducers/client'
import thunkMiddleware from 'redux-thunk'



const rootReducer = combineReducers ({
    client: client
})



// export root reducer, which is all reducers combined
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))
export default store