import { storageService } from './asyncStorageService'

const gStocks = require('../stocks.json')

const STORAGE_KEY = 'STOCK_KEY'

export const stockService = {
    query,
    getStockById,

}


async function query(filterBy = {}) {
    let stocks
    try {
        stocks = await storageService.query(STORAGE_KEY, gStocks)
        console.log(stocks, 'storageService.query(STORAGE_KEY')
        return stocks

    } catch (err) {
        console.log(err, 'err')
        throw err
    }

}

async function getStockById(stockId) {
    const res = await storageService.get(STORAGE_KEY, stockId)
    console.log('get stock by id in service', res, stockId);
    return res
}

