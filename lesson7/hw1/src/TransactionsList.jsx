import React, { Component } from 'react';
import Transaction from './Transaction';

class TransactionsList extends Component {
  render() {
    const transactionsList = this.props.transactions;
    return (
    <ul className="transactions">{transactionsList.map(transaction => (
      <Transaction key={transaction.id} {...transaction}/>
    )
  )}</ul>
    )
  }
}

export default TransactionsList;