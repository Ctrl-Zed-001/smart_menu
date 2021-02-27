const initState = []

const CategoryReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ALLCATEGORY':
            return state;
        case 'NEWCATEGORY':
            return [
                ...state,
                action.payload
            ]
        case 'EDITCATEGORY':
            let cindex = state.findIndex(c => c === action.payload)
            console.log(cindex)
            break;
        default:
            return state
    }
}

export default CategoryReducer