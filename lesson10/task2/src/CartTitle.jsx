import React from 'react';

const CartTitle = ({userName , count}) => {
  return (
    <div className="cart-title">
      {`${userName}, you've added ${count} products`}
    </div>
  )
}

export default CartTitle;