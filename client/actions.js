import { dispatch } from 'redux';
import $ from 'jquery';

exports.checkAuthentication = function(dispatch) {
  
  return function() {
    $.get('/getuserid', userId => {
      if (!isNaN(+userId)) {
        return dispatch({ 
          type: 'SET_USER_ID',
          userId
        });
      }
      dispatch({
        type: 'SET_USER_ID',
        userId: null
      });
    });
  };
  
};

