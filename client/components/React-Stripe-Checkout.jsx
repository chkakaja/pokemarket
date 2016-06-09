import React from 'react';
import { browserHistory } from 'react-router';
import $ from 'jquery';
import StripeCheckout  from 'react-stripe-checkout';

export default class PaymentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionEntries: []
    }
  }

  onToken(token) {
    console.log('TOKEN', token);
    
    $.ajax({
      method: 'POST',
      data: {stripeToken: token},
      url: '/api/stripe',
      success: function(data) {
        // console.log(data);
        console.log('Im back from server', data)
        callback(data);
        this.props.item.sold = true;
      },
      error: function(err) {
        console.error('_getCurrentUser error', err);
      },
      dataType: 'json'
    });
  }

  render() {
    return (
      <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_FOC0Cq8W78b70x2LUrT4qTmq"
          name="Vendr Inc."
          image="https://www.mygreatlakes.org/mglstatic/educate/images/knowledge-center/slider/ways-steps.png"
          // description="for goods purchased"
          panelLabel="Total: "
          amount={5000}
          currency="USD"
          bitcoin={true}
          componentClass="div">
          <button className="pure-button">Buy Now ${this.props.item.newPrice}</button>
      </StripeCheckout>
    )
  }
}