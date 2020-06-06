import * as React from "react";
import { useAppState } from "./useAppState";
import { setEmail } from "./appActions";

export const Email: React.FC = () => {
  const {
    dispatch,
    state: {
      email,
      errors: { email: error },
    },
  } = useAppState();

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(setEmail(event.currentTarget.value)),
    [dispatch]
  );

  return (
    <label className="Label">
      <span className="Label-text">Email:</span>
      <input
        className="Label-input"
        type="email"
        placeholder="Email address"
        value={email}
        onChange={handleChange}
      />
      {error && <span className="Label-error">{error}</span>}
    </label>
  );
};
