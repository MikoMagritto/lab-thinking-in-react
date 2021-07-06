import React from 'react';
import { Component } from 'react';
import ProductRow from './ProductRow';


class SearchBar extends Component {
    render() {
        return (
            <form>
                <label>Search</label>
                <input type="search" value={this.props.query} onChange={this.props.handleQuery()} />
                <label> Only show products on stock
                <input type="checkbox" />
                </label>
            </form>
        )
    }
}

export default SearchBar;