import React from 'react';
import PropTypes from 'prop-types';
import Transaction from './Transaction';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transaction_history}>
    <thead className={styles.transaction_thead}>
      <tr className={styles.transaction_tr}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody className={styles.transaction_tbody}>
      {items.map(item => (
        <Transaction
          key={item.id}
          type={item.type}
          amount={item.amount}
          currency={item.currency}
        />
      ))}
    </tbody>
  </table>
);

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

export default TransactionHistory;
