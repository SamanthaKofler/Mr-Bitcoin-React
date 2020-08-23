import React, { Component } from 'react'
import { MarketPriceChart } from '../../cmps/MarketPriceChart/MarketPriceChart'
import { TradeVolumeChart } from '../../cmps/TradeVolumeChart/TradeVolumeChart'
import { TotalBitcoinsChart } from '../../cmps/TotalBitcoinsChart/TotalBitcoinsChart'

export class StatisticPage extends Component {
    render() {
        return (
            <>
                <h3 className="tac">Statistics</h3>
                <MarketPriceChart />
                <TradeVolumeChart />
                <TotalBitcoinsChart />
            </>
        )
    }
}
