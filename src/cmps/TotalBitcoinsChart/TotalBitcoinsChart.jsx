import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import bitcoinService from '../../services/bitcoinService';
import './TotalBitcoinsChart.scss';


export class TotalBitcoinsChart extends Component {
    state = {
        data: {
            labels: [],
            datasets: [
                {
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
        const totals = await bitcoinService.getTotalBitcoins()
        var pickedTotals = totals.filter((val, idx) => {return idx % 250 === 0});
        var pickedDataY = pickedTotals.map(val => val.y);
        this.setState(prevState => ({ ...prevState, data: { ...prevState.data, datasets: [{ ...prevState.data.datasets[0], data: pickedDataY }] } }));
    }

    async getDataX() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const times = await bitcoinService.getTotalBitcoins();
        var pickedTimes = times.filter((time, idx) => {return idx % 250 === 0})
        var pickedDataX = pickedTimes.map(time => {
            var date = new Date(time.x * 1000);
            return months[date.getMonth()];
        })
        this.setState(prevState => ({ ...prevState, data: { ...prevState.data, labels: pickedDataX } }))
    }

    render() {
        console.log(this.state)
        if (!this.state.data.datasets[0].data) return <h3>Loading...</h3>
        return (
            <div className="chart container">
                <h4>Total Bitcoins</h4>
                <Line data={this.state.data} options={this.state.options}/>
            </div>
        )
    }
}
