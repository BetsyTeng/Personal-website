import React, { Component } from 'react';
import style from './style';
import {connect} from 'react-redux';
import Loading from '../Loading/index.jsx';
import {
        HomeRequest
    } from "../../actions";
@connect((state,props)=>({
    homeRequestResult:state.homeRequestResult,
    }))
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.getData = this.getData.bind(this);
    }
    
    componentDidMount() {
      
    }
    componentWillMount(){
        this.props.dispatch(HomeRequest({}));
        // console.log( HomeRequest({}) instanceof Function);
        
    }
    componentWillUpdate(){
    }

    getData(items){
        return (
        <div className={style.title}>
            <h1>{items.Introduction}</h1>
            <h2>{items.name}</h2>
        </div>
        );
    }

    render() {
        const {homeRequestResult}  = this.props;
        const data = homeRequestResult.data;
        return (
            <div className={style.Home}>
            {(homeRequestResult&&homeRequestResult.loaded)?this.getData(data.pulic):<Loading />}
            </div>
        );
    }
}

export default Home;