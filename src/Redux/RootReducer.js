import { combineReducers } from 'redux'
// ALL REDUCERS
import DishReducer from './Reducers/DishReducer'
import TableReducer from './Reducers/TableReducer'

const RootReducer = combineReducers({
    dishes: DishReducer,
    table: TableReducer
})

export default RootReducer