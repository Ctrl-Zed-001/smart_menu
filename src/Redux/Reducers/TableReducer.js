const initState = {
    dishes: [],
    total: 0
}

const TableReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADDDISH":
            return {
                total: state.total = parseInt(state.total) + parseInt(action.payload.price),
                dishes: [
                    ...state.dishes,
                    action.payload
                ]
            }
        default:
            return state;
    }
}

export default TableReducer