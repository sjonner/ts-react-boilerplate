export type Action = ReturnType<
  | typeof setEmail
  | typeof setPassword
  | typeof setPasswordConfirm
  | typeof validateForm
  | typeof setTermsAccepted
>;

export enum ActionType {
  SET_EMAIL = "SET_EMAIL",
  SET_PASSWORD = "SET_PASSWORD",
  SET_PASSWORDCONFIRM = "SET_PASSWORDCONFIRM",
  VALIDATE_FORM = "VALIDATE_FORM",
  SET_TERMS_ACCEPTED = "SET_TERMS_ACCEPTED",
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

export function setTermsAccepted(value: boolean) {
  return <const>{
    type: ActionType.SET_TERMS_ACCEPTED,
    value,
  };
}
