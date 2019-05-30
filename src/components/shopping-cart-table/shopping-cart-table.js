import React from 'react';
import { connect } from 'react-redux';

import './shopping-cart-table.css';

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  const renderRow = ({ id, title, count, total }, idx) => {
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td>
          <button
            onClick={() => onDecrease(id)}
            type="button"
            className="btn btn-outline-warning btn-sm"
          >
            <i className="fa fa-minus-circle" />
          </button>
          <button
            onClick={() => onIncrease(id)}
            type="button"
            className="btn btn-outline-success btn-sm"
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDelete(id)}
            type="button"
            className="btn btn-outline-danger btn-sm"
          >
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    );
  };

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
        <tbody>{items.map(renderRow)}</tbody>
      </table>

      <div className="total">Total: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrease: id => {
      console.log(`increase ${id}`);
    },
    onDecrease: id => {
      console.log(`decrease ${id}`);
    },
    onDelete: id => {
      console.log(`delete ${id}`);
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartTable);
