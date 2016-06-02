import $ from 'jquery';
import { join } from './socket.js';

exports.checkAuthentication = function(dispatch) {
  
  return function() {
    $.get('/getuserid', user => {
      if (user) {
        join(user.id);
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

