export const initialState = {
  step: 1,
  darkTheme: false,
  form: {
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    street: '',
    house: '',
    photo: '',
    password: '',
    confirmPassword: '',
    avatar: ''
  }
};

export const NEXT_STEP = "[form] - next step";
export const PREV_STEP = "[form] - prev step";
export const UPDATE_STATE = "[form] - update state";
export const SWITCH_THEME = "[form] - switch theme";

export const nextStep = () => ({
  type: NEXT_STEP
});

export const prevStep = () => ({
  type: PREV_STEP
});

export const updateState = (field) => ({
  type: UPDATE_STATE,
  payload: field
})

export const switchTheme = () => ({
  type: SWITCH_THEME
})

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return {
        ...state,
        step: state.step + 1
      };
    case PREV_STEP:
      return {
        ...state,
        step: state.step - 1
      };
    case UPDATE_STATE:
      return {
        ...state,
        form: {
            ...state.form,
            [action.payload.name]: action.payload.value
        }
      };
      case SWITCH_THEME:
        return {
          ...state,
          darkTheme: !state.darkTheme
        }
    default:
      return state;
  }
};
