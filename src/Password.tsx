import * as React from "react";
import { useAppState } from "./useAppState";
import { setPassword } from "./appActions";

export const Password: React.FC = () => {
  const {
    dispatch,
    state: {
      password,
      errors: { password: error },
    },
  } = useAppState();

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(setPassword(event.currentTarget.value)),
    [dispatch]
  );

  return (
    <label className="Label">
      <span className="Label-text">Password:</span>
      <input
        className="Label-input"
        type="password"
        placeholder="Choose password"
        value={password}
        onChange={handleChange}
      />
      {error && <span className="Label-error">{error}</span>}
    </label>
  );
};
