import { react, Component } from "react";
import ProductRow from './ProductRow';


class SearchBar extends Component {
    render() {
        return (
            <form>
                <label>Search</label>
                <input type="search" />
                <label> Only show products on stock
                <input type="checkbox" />
                </label>
            </form>
        )
    }
}

export default SearchBar;