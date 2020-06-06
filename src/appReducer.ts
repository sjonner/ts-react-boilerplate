import { Action, ActionType } from "./appActions";

export const initialState = {
  email: "",
  password: "",
  passwordConfirm: "",
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
    case ActionType.VALIDATE_FORM:
      return validateForm(state);
    default:
      // How to fix reading type on action when type is never?
      throw new Error(`Invalid action type passed: ${action!.type}`);
  }
}

function validateForm(state: AppState): AppState {
  let emailError = "";
  let passwordError = "";
  let confirmError = "";

  if (!state.email.includes("@")) emailError = "Invalid password";
  else if (state.password.length < 7) passwordError = "Password is too short";
  else if (state.password !== state.passwordConfirm)
    confirmError = "Passwords should match";

  return {
    ...state,
    errors: {
      email: emailError,
      password: passwordError,
      passwordConfirm: confirmError,
    },
  };
}
