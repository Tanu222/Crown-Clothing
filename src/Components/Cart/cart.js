import React from 'react';
import CustomButton from '../Custom-button/Custom-button';
import './cart.css';
import CartItem from '../Cart-item/Cart-item';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const Cart = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
       <div className='cart-items'>
          {
              cartItems.length ?(
              cartItems.map(cartItem =>(
                  <CartItem key={cartItem.id} item={cartItem} />
              )))
              : ( <span className='empty-message'>Your cart is lighter than a feather</span>)
          }
       </div>
       <CustomButton onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())}
        }>
           GO TO CHECKOUT
        </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(Cart));