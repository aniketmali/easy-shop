import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    console.log('Token: ',token);
    alert('PAYMENT SUCCESSFUL');
}
const StripeCheckoutButton =({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_CXkmJ4cc7Ap4BZJDGLDH8R3A00fs1ubI6N';
    return(
    <div>
        <StripeCheckout 
            label='PAY NOW'
            name='easy shop'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='PAY NOW'
            token={onToken}
            stripeKey={publishableKey}
        />
    </div>
)}
export default StripeCheckoutButton;