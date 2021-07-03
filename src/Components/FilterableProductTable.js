import React from 'react';
import { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {


    render() {
        return (<div>
            <SearchBar />
            <ProductTable />
        </div>
        )

    }
}

export default FilterableProductTable;