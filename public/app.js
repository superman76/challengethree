{/* 
Need to ininitialize the state of products 
Need to set the state of products
*/} 

var ProductTable = React.createClass({
  propTypes: {
    url: React.PropTypes.string.isRequired,
  },
  loadProductsFromServer: function() {
    var self = this;
    $.ajax({
      url: this.props.url,
      method: 'GET'
    }).done(function(data){
      {/* A JSX comment */}
      {/* Your code here */}
    })
  },
  componentDidMount: function() {
    this.loadProductsFromServer();
  },
  render: function() {
    return (
      <div>
        <ProductList products={this.state.SOMETHING} />
      </div>
      )
  }
});


{/* 
Filter through products and map only products in stock..
Replace the table body section with dynamic data.
*/}  

var  ProductList = React.createClass({
  render: function() {
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
              <td> each name </td>
              <td> each cost </td>
              <td> inStock is true </td>
            </tr>
            </tbody>
          </table>
        </div>
      )
  }
});

React.render(<ProductTable />, document.getElementById('react-container'));
{/* WHICH URL IS USED TO GET ALL PRODUCTS? */}