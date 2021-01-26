import { combineReducers } from 'redux'
// ALL REDUCERS
import DishReducer from './Reducers/DishReducer'

const RootReducer = combineReducers({
    dishes: DishReducer,
})

export default RootReducer