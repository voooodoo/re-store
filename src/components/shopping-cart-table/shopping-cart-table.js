import React from 'react';

import './shopping-cart-table.css';

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>You Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>name</td>
            <td>2</td>
            <td>$40</td>
            <td>
              <button type="button" className="btn btn-outline-danger btn-sm">
                <i className="fa fa-trash-o" />
              </button>
              <button type="button" className="btn btn-outline-succes btn-sm">
                <i className="fa fa-plus-circle" />
              </button>
              <button type="button" className="btn btn-outline-warning btn-sm">
                <i className="fa fa-minus-circle" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="total">Total: $201</div>
    </div>
  );
};

export default ShoppingCartTable;
