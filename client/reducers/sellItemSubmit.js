import assign from 'lodash.assign';

const initialState = {
  values: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FORM_UPDATE_VALUE:
      return assign({}, state, {
        values: assign({}, state.values, {
          [action.name]: action.value
        })
      });

      case FORM_RESET:
        return initialState;

      default:
        return state;
  }
}
