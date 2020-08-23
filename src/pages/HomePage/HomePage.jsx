import React, { Component } from 'react'
import { connect } from 'react-redux';
import userService from '../../services/userService';
import bitcoinService from '../../services/bitcoinService';
import {signUp} from '../../actions/userActions';
import { MovesList } from '../../cmps/MovesList/MovesList';
import { MarketPriceChart } from '../../cmps/MarketPriceChart/MarketPriceChart';
import './HomePage.scss';
import ContentLoader from '../../cmps/ContentLoader/ContentLoader';

class _HomePage extends Component {

    state = {
        rate: null,
        currMarketPrice: null
    }
    get movesToShow() {
        return this.props.user.moves.slice(0, 3);
      }

    componentDidMount() {
        if(!this.props.user) {
            this.props.history.push('/signup')
        }
        this.getRate();
        this.getCurrMarketPrice();
    }

    async getRate() {
        const res = await bitcoinService.getRate();
        const rate = res.data;
        this.setState({ rate });
    }
    async getCurrMarketPrice() {
        const res = await bitcoinService.getMarketPrice();
        this.setState({currMarketPrice: res[res.length-1].y});
    }

    render() {
        const { rate, currMarketPrice } = this.state;
        if (!rate) return <ContentLoader />
        return (
            <>
                <div className="greet container tac">
                    <h3>Hi, { this.props.user.name }!</h3>
                    <h4><i className="fas fa-coins"></i>Coins: { this.props.user.coins }</h4>
                    <h4><i className="fab fa-btc"></i>BTC: { rate }</h4>
                    <h4><i className="fas fa-dollar-sign"></i>Current Market Price: ${currMarketPrice}</h4>
                </div>
                <MarketPriceChart />
                <div className="container">
                    <p className="last-3 container"><i className="fas fa-history"></i>Last 3 Moves</p>
                </div>
                <MovesList moves={this.movesToShow} showTo={true}></MovesList>
                
            </>
        )
    }
}


function mapStateProps(state) {
    return {
        user: state.UserReducer.user
    }
}
const mapDispatchToProps = {
    signUp
}

export const HomePage = connect(mapStateProps, mapDispatchToProps)(_HomePage)