import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I6CwkKH9S95TTvSXF8eoNMloiSJi9qnEwFlubIXqaHI4hSU8uyqbpqjfyFHNgGOwQSJtIQGugsUNGeUrRDDicMY00d51rb3Yg';
     
    const onToken = token => {
        alert('Payment Successful');
    }
    return(
        <StripeCheckout 
          label='Pay Now'
          name='CROWN Clothing Ltd.'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total value is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;