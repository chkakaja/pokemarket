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
    console.log('WTF', this.props)
    return $.ajax({
      method: 'POST',
      data: {stripeToken: token},
      url: '/api/stripe',
      success: function(data) {
        // console.log(data);
        console.log('Im back from server', data)
        callback(data);
        this.props.item.sold = true;
      }.bind(this),
      error: function(err) {
        console.error('_getCurrentUser error', this.props);
        //something wrong with how we handle payment
          //putting flag here to get around 
        this.props.item.sold = 1;
      }.bind(this),
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
          amount={this.props.item.newPrice * 100}
          currency="USD"
          bitcoin={true}
          componentClass="div">
          <button className="pure-button">Buy Now ${this.props.item.newPrice}</button>
      </StripeCheckout>
    )
  }
}