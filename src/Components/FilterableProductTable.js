import React from 'react';
import ProductRow from './ProductRow';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends React.Component {


    handleQuery = (ev) => {
        this.setState({
            query: ev.target.value
        })
    }

    render() {
        return (<div>
            <SearchBar />
            <ProductTable data={this.props.products} />
        </div>

        )

    }
}

export default FilterableProductTable;