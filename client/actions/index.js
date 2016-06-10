import $ from 'jquery';
import { join } from './../socket.js';

const setUser = (user) => {
  return {
    type: 'SET_USER',
    user: user
  };
};

const fetchUser = () => {
  return (dispatch) => {
    $.get('/getuserid', user => {
      if (user) {
        join(user.id);
        dispatch(setUser(user));
      }
    });
  };
};

const setFeedback = (feedback) => {
  return {
    type: 'SET_FEEDBACK',
    feedback
  }
}

const fetchFeedback = (receiver) => {
  return (dispatch) => {
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
      dispatch(setFeedback(feedback))
    });
  };
};

const setLeaveFeedback = (toLeaveFeedbackArray) => {
  return {
    type: 'SET_LEAVE_FEEDBACK',
    toLeaveFeedbackArray
  }
}

const fetchLeaveFeedback = () => {
  return (dispatch) => {
    $.get(
      '/toleavefeedback', (toLeaveFeedbackArray) => { 
        dispatch(setLeaveFeedback(toLeaveFeedbackArray));
      });
  }
};

const updateProfile = (profile) => {
  return {
    type: 'UPDATE_PROFILE',
    profile
  }
}

const fetchProfile = function(id) {
  return (dispatch) => {
    $.get('/getprofile', { id }, profile => {
      dispatch(updateProfile(profile));
    });
  }
}
 
export { fetchUser, fetchLeaveFeedback, fetchFeedback, fetchProfile };
