const initState = {
    dishes: [],
    total: 0
}

const TableReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADDDISH":
            // CHECK IF DISH IS PRESENT IN TABLE
            let checkAdded = state.dishes.filter(dish => dish.id === action.payload.id)
            // IF YES THEN JUST INCREASE QUANTITY AND PRICE
            if (checkAdded.length > 0) {
                let getIndex = state.dishes.findIndex(dish => dish.id === checkAdded[0].id)
                checkAdded[0].quantity += 1;
                let newTotal = state.total += parseInt(checkAdded[0].price)
                let updatedDishes = [...state.dishes]
                updatedDishes[getIndex] = checkAdded[0]
                return {
                    total: newTotal,
                    dishes: [...updatedDishes]
                }
            }
            // IF NO THEN ADD IT TO THE TABLE 
            else {
                return {
                    total: state.total = parseInt(state.total) + parseInt(action.payload.price),
                    dishes: [
                        ...state.dishes,
                        {
                            ...action.payload,
                            quantity: 1
                        }
                    ]
                }
            }

        case "ADDQUANTITY":
            let updatedDishes1 = [...state.dishes]
            updatedDishes1[action.payload].quantity += 1;
            let newTotal1 = state.total + parseInt(updatedDishes1[action.payload].price)
            return {
                dishes: [...updatedDishes1],
                total: newTotal1
            }

        case "REDUCEQUANTITY":
            let updatedDishes2 = [...state.dishes]
            let newTotal2 = state.total
            newTotal2 = state.total - parseInt(updatedDishes2[action.payload].price)
            // CHECK IF QUANTITY IS 1
            if (updatedDishes2[action.payload].quantity === 1) {
                // IF YES THEN REMOVE THE DISH FROM TABLE
                updatedDishes2.splice(action.payload, 1)
            }
            // ELSE JUST REDUCE QUANTITY BY 1
            else {
                updatedDishes2[action.payload].quantity -= 1;
            }

            return {
                dishes: [...updatedDishes2],
                total: newTotal2
            }

        default:
            return state;
    }
}

export default TableReducer