import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const Transaction = ({ type, amount, currency }) => (
  <tr className={styles.transaction_tr}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transaction;
