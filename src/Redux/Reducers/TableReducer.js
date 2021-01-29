const initState = {
    dishes: [],
    total: 0
}

const TableReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADDDISH":
            let checkAdded = state.dishes.filter(dish => dish.id === action.payload.id)
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
            } else {
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

        default:
            return state;
    }
}

export default TableReducer