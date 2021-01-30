import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Dashboard/Login'
import Homepage from './Homepage/Homepage'
import Details from './ProductDetail/Details'
import TablePage from './TablePage/TablePage'
import AllDishes from './Dashboard/AllDishes'
import NewDish from './Dashboard/NewDish'
import EditDish from "./Dashboard/EditDish"
import Error from './Error'


const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/"><Homepage /></Route>
                <Route exact path="/dish/:dish_id"><Details /></Route>
                <Route exact path="/table"><TablePage /></Route>
                <Route exact path="/admin"><Login /></Route>
                <Route exact path="/admin/allDishes"><AllDishes /></Route>
                <Route exact path="/admin/newDish"><NewDish /></Route>
                <Route exact path="/admin/editDish"><EditDish /></Route>
                <Route><Error /></Route>
            </Switch>
        </Router>
    )
}

export default App
