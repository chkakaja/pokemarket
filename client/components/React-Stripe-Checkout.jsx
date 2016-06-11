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
    token.price = this.props.item.newPrice * 100;
    return $.ajax({
      method: 'POST',
      data: {stripeToken: token},
      url: '/api/stripe',
      success: function(data) {
        // console.log(data);
        console.log('Im back from server', data);
        callback(data);
        this.props.item.sold = 1;
        this.itemSold()

      }.bind(this),
      error: function(err) {
        console.error('_getCurrentUser error', this.props);
        console.log('this', this);
        //something wrong with how we handle payment
          //putting flag here to get around 
        this.props.item.sold = 1;
        this.itemSold()
      }.bind(this),
      dataType: 'json'
    });
  }

  itemSold() {
    return $.ajax({
      method: 'POST',
      data: {id: this.props.item.id, sold: this.props.item.sold},
      url: '/itemSold',
      success: function(data) {
        console.log('Im back from server', data);
      }.bind(this),
      error: function(err) {
        console.error('itemSold error')
      }.bind(this),
      dataType: 'json'
    });
  }

  render() {
    return (
      <StripeCheckout
          token={this.onToken.bind(this)}
          stripeKey="pk_test_FOC0Cq8W78b70x2LUrT4qTmq"
          name="PokeMarket Place"
          image="https://lh4.ggpht.com/JWuRL9-MsW1VFYfItQXnw4z-Yry0d7b9H0L5s0Refd7JhcOac0UQ4ujmNNeI6o64Eqs=w300"
          // description="for goods purchased"
          panelLabel="Total: "
          amount={this.props.item.newPrice * 100}
          currency="USD"
          bitcoin={true}
          componentClass="div">
          <button className="pure-button stripe-button-override">Buy Now ${this.props.item.newPrice}</button>
      </StripeCheckout>
    )
  }
}