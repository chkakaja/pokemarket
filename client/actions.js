import { dispatch } from 'redux';
import $ from 'jquery';

exports.checkAuthentication = function(dispatch) {
  
  return function() {
    $.get('/getuserid', user => {
      if (user) {
        return dispatch({ 
          type: 'SET_USER',
          user
        });
      }
      dispatch({
        type: 'SET_USER',
        user: null
      });
    });
  };
  
};

