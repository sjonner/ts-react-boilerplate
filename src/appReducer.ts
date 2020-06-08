import { Action, ActionType } from "./appActions";

export const initialState = {
  step: 1,
  email: "",
  password: "",
  passwordConfirm: "",
  termsAccepted: false,
  errors: {
    email: "",
    password: "",
    passwordConfirm: "",
  },
};

export type AppState = typeof initialState;

export function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
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
  };

  if (step === 1) {
    if (!state.email.includes("@")) errors.email = "Invalid password";
    else if (state.password.length < 7)
      errors.password = "Password is too short";
    else if (state.password !== state.passwordConfirm)
      errors.passwordConfirm = "Passwords should match";
  }
  const hasErrors = Object.values(errors).some(Boolean);

  return {
    ...state,
    step: step + (hasErrors ? 0 : 1),
    errors,
  };
}
