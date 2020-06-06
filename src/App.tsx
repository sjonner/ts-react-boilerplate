import * as React from "react";
import { useCallback } from "react";
import { validateForm } from "./appActions";
import { useAppState } from "./useAppState";
import { Email } from "./Email";
import { Password } from "./Password";
import { PasswordConfirm } from "./PasswordConfirm";

export const App: React.FC = () => {
  const { dispatch } = useAppState();

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

      <button type="submit">Submit</button>
    </form>
  );
};
