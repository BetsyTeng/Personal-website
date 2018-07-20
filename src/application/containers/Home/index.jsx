import React, { Component } from 'react';
import style from './index.scss';
import {connect} from 'react-redux';

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
        
      setTimeout(()=>{
        console.log('....',this.props.homeRequestResult);
      },2000);
    }
    componentWillMount(){
        this.props.dispatch(HomeRequest({}))
        // console.log( HomeRequest({}) instanceof Function);
        
    }
    componentWillUpdate(){
        // {},(response)=>{
        //     console.log(response); 
        //  },(response)=>{
        //      console.log(response);
        //  }
    }
    render() {
        const {searchStateResult}  = this.props; 
        return (
            <div className={style.Home}>
                xxxxx
                
                {/* <SearchSection className={this.props.searchStateResult.hasShowSearch?"inf-is-visible":""} /> */}
            </div>
        );
    }
}

export default Home;