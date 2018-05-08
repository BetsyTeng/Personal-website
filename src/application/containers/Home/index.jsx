import React, { Component } from 'react';
import style from './index.scss';
import {connect} from 'react-redux';
import SearchSection from '../../containers/SearchSection/index.jsx';

import {ChangeSearchSectionState} from "../../actions/index";
@connect((state,props)=>({
    searchStateResult:state.searchStateResult
    }))
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
            slideIndex: 0
        }
    }
    
    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         data: ['be98bb83-dd0b-45ca-9313-c2d7b741ba55', 'a551eb3b-be3e-4a0e-9775-55b7d612b3d6', 'a551eb3b-be3e-4a0e-9775-55b7d612b3d6'],
        //     });
        // }, 100);
    }
    componentWillUpdate(){
    }
    render() {
        const {searchStateResult}  = this.props; 
        return (
            <div className={style.Home}>
                <SearchSection className={this.props.searchStateResult.hasShowSearch?"inf-is-visible":""} />
            </div>
        );
    }
}

export default Home;