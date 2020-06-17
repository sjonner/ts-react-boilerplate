import { AppState } from "./appReducer";

export type Action = ReturnType<
  | typeof setField
  | typeof setEmail
  | typeof setPassword
  | typeof setPasswordConfirm
  | typeof validateForm
  | typeof setTermsAccepted
  | typeof setStep
>;

export enum ActionType {
  SET_EMAIL = "SET_EMAIL",
  SET_PASSWORD = "SET_PASSWORD",
  SET_PASSWORDCONFIRM = "SET_PASSWORDCONFIRM",
  VALIDATE_FORM = "VALIDATE_FORM",
  SET_TERMS_ACCEPTED = "SET_TERMS_ACCEPTED",
  SET_STEP = "SET_STEP",
  SET_FIELD = "SET_FIELD"
}


export function setField<T extends keyof AppState>(field: T, value: AppState[T]) {
  return <const>{
    type: ActionType.SET_FIELD,
    field,
    value,
  };
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

export function validateForm(step: number) {
  return <const>{
    type: ActionType.VALIDATE_FORM,
    value: step,
  };
}

export function setTermsAccepted(value: boolean) {
  return <const>{
    type: ActionType.SET_TERMS_ACCEPTED,
    value,
  };
}

export function setStep(step: number) {
  return <const>{
    type: ActionType.SET_STEP,
    value: step,
  };
}
