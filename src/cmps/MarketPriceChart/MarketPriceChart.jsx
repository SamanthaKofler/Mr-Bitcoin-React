import React, { Component } from 'react'
// import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Line } from 'react-chartjs-2';
import bitcoinService from '../../services/bitcoinService';
import './MarketPriceChart.scss';


export class MarketPriceChart extends Component {
    state = {
        data: {
            labels: [],
            datasets: [
                {
                    // label: 'Market Price',
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    data: []
                }
            ]
        },
        options: {
            legend: {
                display: false,
            },
        }
    }

    async componentDidMount() {
        this.getDataY();
        this.getDataX();
    }

    async getDataY() {
        const prices = await bitcoinService.getMarketPrice()
        var dataY = prices.map(price => price.y);
        this.setState(prevState => ({ ...prevState, data: { ...prevState.data, datasets: [{ ...prevState.data.datasets[0], data: dataY }] } }));
    }
    async getDataX() {
        const times = await bitcoinService.getMarketPrice();
        var dataX = times.map(time => new Date(time.x * 1000).toLocaleDateString());
        this.setState(prevState => ({ ...prevState, data: { ...prevState.data, labels: dataX } }))
    }

    render() {
        if (!this.state.data.datasets[0].data) return <h3>Loading...</h3>
        return (
            <div className="chart container">
                <h4>Market Price</h4>
                {/* <Sparklines data={this.state.data} height={20} >
                <SparklinesLine style={{ stroke: "orange", strokeWidth: "1" }} />
                </Sparklines> */}
                <Line data={this.state.data} options={this.state.options}/>
            </div>
        )
    }
}
