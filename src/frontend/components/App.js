/* App.js
*
*    The root module of the frontend.  It is the only class component in the tree.
*
*/

import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/style.css';
import Logo from './logo.png';

function Header() {
    return (
        <img src={Logo} alt="Logo" />
    )
}


class ProductCategoryRow extends React.Component {
    render() {
        const category = this.props.category;
        return (
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        );
    }
}

class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ?
            product.name :
            <span style={{ color: 'red' }}>
                {product.name}
            </span>;

        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}

class ProductTable extends React.Component {
    render() {
        const rows = [];
        let lastCategory = null;

        this.props.products.forEach((product) => {
            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category} />
                );
            }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name} />
            );
            lastCategory = product.category;
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." />
                <p>
                    <input type="checkbox" />
                    {' '}
            Only show products in stock
          </p>
            </form>
        );
    }
}

class FilterableProductTable extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        );
    }
};


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    componentDidMount() {
    };

    render() {
        return (
            <section>
                <h2>Hello World</h2>
                <h3>Hi Brita, our 1st frontend app!</h3>

            </section>
        );
    };
};



const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];




ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById('container')
);


export default App;