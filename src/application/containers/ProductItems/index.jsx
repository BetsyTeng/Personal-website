import React, { Component } from 'react';
import style from './index.scss';
class ProductItems extends Component {
    constructor(props) {
        super(props);
        }

    render() {
        return <div className = {style.ProductItems}>
            'ProductItems'
            </div>
    }
}

export default ProductItems;