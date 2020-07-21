import React from "react";
import { useAppState, useAppDispatch } from "./useAppState";

export const PasswordConfirm: React.FC = () => {
  const {
    passwordConfirm,
    errors: { passwordConfirm: error },
  } = useAppState();
  const { setField } = useAppDispatch();

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setField("passwordConfirm", event.currentTarget.value),
    [setField]
  );

  return (
    <label className="Label">
      <span className="Label-text">Password confirm:</span>
      <input
        className="Label-input"
        type="password"
        placeholder="Confirm password"
        value={passwordConfirm}
        onChange={handleChange}
      />
      {error && <span className="Label-error">{error}</span>}
    </label>
  );
};
