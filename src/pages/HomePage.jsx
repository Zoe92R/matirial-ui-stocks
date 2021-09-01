import React, { useEffect } from 'react'
import { StockList } from '../cmps/StockList.jsx'
import { loadStocks } from '../store/actions/stockAction.js'
import { useDispatch, useSelector } from 'react-redux'

export const HomePage  = () =>{

    const dispatch = useDispatch()
    const stocks = useSelector(state => state.stockModule.stocks)
    const isLoading = useSelector(state => state.systemModule.isLoading)


    useEffect(() => {
        dispatch(loadStocks())
        return () => {
        }
    }, [])


        if (isLoading) return <div>Loading...</div>
        return (
                <StockList stocks={stocks} />
        )
    
}

