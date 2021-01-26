import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './Homepage/Homepage'
import Details from './ProductDetail/Details'

const App = () => {
    return (
        <Router>
            <Route exact path="/"><Homepage /></Route>
            <Route exact path="/:dish_id"><Details /></Route>
        </Router>
    )
}

export default App
