import React from 'react';
import { Component } from 'react';
import ProductRow from './ProductRow'


class ProductTable extends Component {

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
                    {this.props.data.map(el => {
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