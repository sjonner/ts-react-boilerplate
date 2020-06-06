export type Action = ReturnType<
  | typeof setEmail
  | typeof setPassword
  | typeof setPasswordConfirm
  | typeof validateForm
>;

export enum ActionType {
  SET_EMAIL = "SET_EMAIL",
  SET_PASSWORD = "SET_PASSWORD",
  SET_PASSWORDCONFIRM = "SET_PASSWORDCONFIRM",
  VALIDATE_FORM = "VALIDATE_FORM",
}

export function setEmail(email: string) {
  return <const>{
    type: ActionType.SET_EMAIL,
    value: email,
  };
}

export function setPassword(password: string) {
  return <const>{
    type: ActionType.SET_PASSWORD,
    value: password,
  };
}

export function setPasswordConfirm(password: string) {
  return <const>{
    type: ActionType.SET_PASSWORDCONFIRM,
    value: password,
  };
}

export function validateForm() {
  return <const>{
    type: ActionType.VALIDATE_FORM,
  };
}
