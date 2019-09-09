import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_o2GgtLb6x9sDSh4T07PYRbSS';

  const onToken = token => {
    console.log(token);
    alert('Thank You, Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='SALONE express.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/Er7.svg'
      description={`Your total is SLL${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;