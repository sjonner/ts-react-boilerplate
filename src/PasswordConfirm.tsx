import * as React from "react";
import { useAppState } from "./useAppState";
import { setPasswordConfirm } from "./appActions";

export const PasswordConfirm: React.FC = () => {
  const {
    dispatch,
    state: {
      passwordConfirm,
      errors: { passwordConfirm: error },
    },
  } = useAppState();

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(setPasswordConfirm(event.currentTarget.value)),
    [dispatch]
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
