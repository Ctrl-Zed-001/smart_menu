import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './Homepage/Homepage'
import Details from './ProductDetail/Details'
import TablePage from './TablePage/TablePage'

const App = () => {
    return (
        <Router>
            <Route exact path="/"><Homepage /></Route>
            <Route exact path="/dish/:dish_id"><Details /></Route>
            <Route exact path="/table"><TablePage /></Route>
        </Router>
    )
}

export default App
