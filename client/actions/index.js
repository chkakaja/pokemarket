import $ from 'jquery';
import { join } from './../socket.js';

const setUser = function(user) {
  return {
    type: 'SET_USER',
    user: user
  };
};

const checkAuthentication = function(dispatch) {
  return (user) => {
    $.get('/getuserid', user => {
      if (user) {
        join(user.id);
        dispatch(setUser(user));
      }
    });
  };
};

const getFeedback = function(dispatch) {
  return function(receiver) {
    $.get('/feedback', { receiver }, feedbackArray => {
      let positive = 0, negative = 0, neutral = 0;

      feedbackArray.forEach(feedback => {
        if (feedback.rating === 1) {
          return positive++;
        } else if (feedback.rating === -1) {
          return negative++;
        }
        neutral++;
      });    

      let feedback = { feedbackArray, positive, negative, neutral, receiver };

      dispatch({
        type: 'GET_FEEDBACK',
        feedback
      })
    });
  };
};

const getLeaveFeedback = function(dispatch) {
  return function() {
    $.get('/toleavefeedback', toLeaveFeedbackArray => {
      dispatch({
        type: 'GET_LEAVE_FEEDBACK',
        toLeaveFeedbackArray
      });
    })
  }
};

const getProfile = function(dispatch) {
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
