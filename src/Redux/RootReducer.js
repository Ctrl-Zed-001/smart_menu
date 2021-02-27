import { combineReducers } from 'redux'
// ALL REDUCERS
import DishReducer from './Reducers/DishReducer'
import TableReducer from './Reducers/TableReducer'
import CategoryReducer from './Reducers/CategoryReducer'

const RootReducer = combineReducers({
    dishes: DishReducer,
    table: TableReducer,
    categories: CategoryReducer
})

export default RootReducer