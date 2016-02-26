
/* 
Need to ininitialize the state of products 
Need to set the state of products
*/

var ProductTable = React.createClass({
  getInitialState: function() {
    return {
      products: []
    }
  },
  propTypes: {
    url: React.PropTypes.string.isRequired,
  },
  loadProductsFromServer: function() {
    var self = this;
    $.ajax({
      url: '/api/products',
      method: 'GET'
    }).done(function(products){
      self.setState({
        products: products
      })
        console.log("Yeehaaaaaaaa!!!");
      // {/* A JSX comment */}
      // {/* Your code here */}
    });
  },
  componentDidMount: function() {
    this.loadProductsFromServer();
  },
  render: function() {
    return (
      <div>
        <ProductList products={this.state.products} 
        products={ this.state.products }/>
      </div>
      )
  }
});

{/*var productsInStock = React.createClass({
  render: function() 

  }
*/}
{/* 
Filter through products and map only products in stock..
Replace the table body section with dynamic data.
*/}  

var ProductList = React.createClass({
  render: function() {
    console.log("I'm stuck!");
    var self = this;


    var inStockFilter = function(product) {
      return product.inStock = 'true';
    };

    var productsInStock = this.props.products.filter(inStockFilter).map(function(p) {
    return (
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>product</th>
                <th>cost </th>
                <th> inStock </th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td> {p.name} </td>
              <td> {p.cost} </td>
              <td> {p.inStock} </td>
            </tr>
            </tbody>
          </table>
        </div>
      )
    })
    return (<table>
            <h3> { productsInStock } </h3>
          </table>
    )    
  }
});

React.render(<ProductTable url="api/products" />, document.getElementById('react-container'));
{/* WHICH URL IS USED TO GET ALL PRODUCTS? */}