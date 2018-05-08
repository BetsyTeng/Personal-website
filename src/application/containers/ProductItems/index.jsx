import React, { Component } from 'react';
import style from './index.scss';
class ProductItems extends Component {
    constructor(props) {
        super(props);
        }

    render() {
        console.log('为什么不刷新呢');
        return <div className = {style.ProductItems}>
            'ProductItems'
            </div>
    }
}

export default ProductItems;