import { stockService } from "../../services/stockService.js"


export function loadStocks() {
    return async dispatch => {
        try {
            dispatch({ type: 'LOADING_START' })
            const stocks = await stockService.query()
            dispatch({ type: 'SET_STOCKS', stocks })
        } catch (err) {
            console.log('stockActions: err in load stocks', err)
        } finally {
            dispatch({ type: 'LOADING_DONE' })
        }
    }
}

