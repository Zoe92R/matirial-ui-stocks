const initialState = {
    stocks: [],
}

export function stockReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_STOCKS':
            return { ...state, stocks: action.stocks }
        case 'ADD_STOCK':
            return { ...state, stocks: [action.stock, ...state.stocks] }
        case 'UPDATE_STOCK':
            return { ...state, stocks: [action.stock, ...state.stocks.filter(stock => action.stock._id !== stock._id)] }
        case 'REMOVE_STOCK':
            return { ...state, stocks: state.stocks.filter(stock => stock._id !== action.stockId) }
        default:
            return state
    }
}