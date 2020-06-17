import { Action, ActionType } from "./appActions";

export const initialState = {
  step: 1,
  email: "",
  password: "",
  passwordConfirm: "",
  termsAccepted: false,
  street: "",
  houseNumber: "",
  city: "",
  zipCode: "",
  errors: {
    email: "",
    password: "",
    passwordConfirm: "",
    street: "",
    houseNumber: "",
    city: "",
    zipCode: "",
  },
};

export type AppState = typeof initialState;

export function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case ActionType.SET_FIELD:
      return { ...state, [action.field]: action.value };
    case ActionType.SET_EMAIL:
      return { ...state, email: action.value };
    case ActionType.SET_PASSWORD:
      return { ...state, password: action.value };
    case ActionType.SET_PASSWORDCONFIRM:
      return { ...state, passwordConfirm: action.value };
    case ActionType.SET_TERMS_ACCEPTED:
      return { ...state, termsAccepted: action.value };
    case ActionType.SET_STEP:
      return { ...state, step: action.value };
    case ActionType.VALIDATE_FORM:
      return validateForm(state, action.value);
    default:
      // How to fix reading type on action when type is never?
      throw new Error(`Invalid action type passed: ${action!.type}`);
  }
}

// TODO: Move validation logic to separate service?
function validateForm(state: AppState, step: number): AppState {
  const errors = {
    email: "",
    password: "",
    passwordConfirm: "",
    street: "",
    houseNumber: "",
    city: "",
    zipCode: "",
  };

  if (step === 1) {
    if (!state.email.includes("@")) errors.email = "Invalid password";
    if (state.password.length < 7) errors.password = "Password is too short";
    if (state.password !== state.passwordConfirm) errors.passwordConfirm = "Passwords should match";
  } else {
    if (!state.street) errors.street = "Street is required";
    if (!state.houseNumber) errors.houseNumber = "House number is required";
    if (!state.city) errors.city = "City is required";
    if (!state.zipCode) errors.zipCode = "Zip code is required";
    else if (!/\d{4}\s?[a-z]{2}/gi.test(state.zipCode)) errors.zipCode = "Invalid zip code";
  }

  const hasErrors = Object.values(errors).some(Boolean);

  return {
    ...state,
    step: step + (hasErrors ? 0 : 1),
    errors,
  };
}
