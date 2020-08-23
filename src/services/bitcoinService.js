import axios from 'axios';

export default {
    getRate,
    getMarketPrice,
    getTotalBitcoins,
    getTradeVolume
}

function getRate() {
    return axios.get('https://blockchain.info/tobtc?currency=USD&value=1');
}

async function getMarketPrice() {
    const prices = await axios.get('https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true');
    return prices.data.values;
  }

async function getTradeVolume() {
    const volumes = await axios.get('https://api.blockchain.info/charts/trade-volume?timespan=1months&format=json&cors=true');
    return volumes.data.values;
  }

async function getTotalBitcoins() {
    const prices = await axios.get('https://api.blockchain.info/charts/total-bitcoins?timespan=6months&format=json&cors=true');
    return prices.data.values;
  }