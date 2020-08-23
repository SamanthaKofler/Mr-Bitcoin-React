import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import bitcoinService from '../../services/bitcoinService';
import './TradeVolumeChart.scss';


export class TradeVolumeChart extends Component {
    state = {
        data: {
            labels: [],
            datasets: [
                {
                    // label: 'Trade Volume',
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
        const volumes = await bitcoinService.getTradeVolume()
        var dataY = volumes.map(volume => volume.y);
        this.setState(prevState => ({ ...prevState, data: { ...prevState.data, datasets: [{ ...prevState.data.datasets[0], data: dataY }] } }));
    }
    async getDataX() {
        const times = await bitcoinService.getTradeVolume();
        var dataX = times.map(time => new Date(time.x * 1000).toLocaleDateString());
        this.setState(prevState => ({ ...prevState, data: { ...prevState.data, labels: dataX } }))
    }

    render() {
        console.log(this.state)
        if (!this.state.data.datasets[0].data) return <h3>Loading...</h3>
        return (
            <div className="chart container">
                <h4>Trade Volume</h4>
                <Line data={this.state.data} options={this.state.options}/>
            </div>
        )
    }
}
