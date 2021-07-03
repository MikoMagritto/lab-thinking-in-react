import { react, Component } from 'react';

class ProductRow extends Component {


    render() {
        return <div><tr>{this.props.name}<td>{this.props.price}</td></tr></div>
    }
}

export default ProductRow;