import style from "./style";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChangeSearchSectionState } from "../../actions/index.js";
import CircleButton from "../../components/CircleButton/index.jsx";
@connect((state, props) => ({
    config: state.config,
}))
class SearchSection extends Component {
    componentWillMount() {
        //style['inf-search-write']search-begin  search-labels-wrapper inf-search-clear
    }
    render() {
        return (
            <section id='inf-search' className={style.searchSection + ' ' + this.props.className}>
                <div className={style.infSearchWrite}>
                    <div className={style.container}>
                        <CircleButton className={style.closeClass} onClick={() => { this.props.dispatch(ChangeSearchSectionState({ hasShowSearch: false })) }} />
                        <div className={style.searchLabelsWrapper}>
                            <a href="#" id="inf-search-clear" className={'no-underline ' + style.infSearchClear}>Clear</a>
                            <form action="/product/search" method="get">
                                <input type="search" aria-label="Search" autoCorrect="off" autoCapitalize="off" spellCheck="false" className={style.infSearchInput} maxLength="200" placeholder="Search Marketplace" autoComplete="off" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default SearchSection;
