const initState = {
    allDishes: [],
    specials: [],
    bestSelling: []
};

const DishReducer = (state = initState, action) => {
    switch (action.type) {
        case "GETALLDATA":
            let sp = action.payload.filter(data => data.special)
            let best = action.payload.filter(data => data.bestSelling)
            return {
                allDishes: action.payload,
                specials: sp,
                bestSelling: best
            };
        default:
            return state;
    }
}

export default DishReducer