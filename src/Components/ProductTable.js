import React from 'react';
import { Component } from 'react';
import json from '../data.json'
import ProductRow from './ProductRow'


class ProductTable extends Component {
    state = {
        data: json
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <td>
                            Name
                    </td>
                        <td>
                            Price
                    </td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.json.map(el => {
                        return (
                            <tr>
                                <ProductRow name={el.name} price={el.price} />
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        )
    }
}


export default ProductTable;