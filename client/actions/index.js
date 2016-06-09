import $ from 'jquery';
import { join } from './../socket.js';

var checkAuthentication = function(dispatch) {
  
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

var getFeedback = function(dispatch) {

  return function(receiver) {
    $.get('/feedback', { receiver }, feedbackArray => {
      var positive = 0;
      var negative = 0;
      var neutral = 0;

      feedbackArray.forEach(feedback => {
        if (feedback.rating == 1) {
          return positive++;
        }
        if (feedback.rating == -1) {
          return negative++;
        }
        neutral++;
      });    

      var feedback = {
        feedbackArray,
        positive,
        negative,
        neutral,
        receiver
      };
      dispatch({
        type: 'GET_FEEDBACK',
        feedback
      })
    });
  };
};

var getLeaveFeedback = function(dispatch) {
  return function() {
    $.get('/toleavefeedback', toLeaveFeedbackArray => {
      dispatch({
        type: 'GET_LEAVE_FEEDBACK',
        toLeaveFeedbackArray
      });
    })
  }
};

var getProfile = function(dispatch) {
  return function(id) {
    $.get('/getprofile', { id }, profile => {
      dispatch({
        type: 'UPDATE_PROFILE',
        profile
      });
    });
  }
}
 
export { checkAuthentication, getLeaveFeedback, getFeedback, getProfile };
