import * as React from "react";
import { useCallback } from "react";
import { validateForm, setTermsAccepted } from "./appActions";
import { useAppState } from "./useAppState";
import { Email } from "./Email";
import { Password } from "./Password";
import { PasswordConfirm } from "./PasswordConfirm";
import { Terms } from "./Terms";

export const App: React.FC = () => {
  const {
    state: { termsAccepted },
    dispatch,
  } = useAppState();

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      dispatch(validateForm());
    },
    [dispatch]
  );

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Email />
      <Password />
      <PasswordConfirm />
      <Terms />

      <button type="submit" disabled={!termsAccepted}>
        Submit
      </button>
    </form>
  );
};
