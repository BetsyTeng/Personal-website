import React, { Component } from 'react';
import style from './index.scss';
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
    }
    
    componentDidMount() {
      
    }
    componentWillMount(){
        this.props.dispatch(HomeRequest({}));
        // console.log( HomeRequest({}) instanceof Function);
        
    }
    componentWillUpdate(){
    }

    render() {
        const {homeRequestResult}  = this.props;
        const data = homeRequestResult.data;
        console.log('homeRequestResult',homeRequestResult,data); 
        return (
            <div className={style.Home} style={{'background':`${(homeRequestResult&&homeRequestResult.loaded?data.pulic.background:'')}`}}>
            {/* {homeRequestResult&&homeRequestResult.loaded?} */}
            <Loading />
            </div>
        );
    }
}

export default Home;