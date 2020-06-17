import * as React from "react";
import { useAppState } from "./useAppState";
import { setPassword } from "./appActions";

export const Password: React.FC = () => {
  const {
    setField,
    state: {
      password,
      errors: { password: error },
    },
  } = useAppState();
  // I Know you prefer this on a global state object, but I'm wondering what the idea is.
  // Local state for simple things isn't bad perse right?
  const [showPassword, setShowPassword] = React.useState(false);

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setField("password", event.currentTarget.value),
    [setField]
  );

  return (
    <label className="Label">
      <span className="Label-text">Password:</span>
      <input
        className="Label-input"
        type={showPassword ? "text" : "password"}
        placeholder="Choose password"
        value={password}
        onChange={handleChange}
      />
      <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ opacity: showPassword ? 1 : 0.5 }}>
        👁
      </button>
      {error && <span className="Label-error">{error}</span>}
    </label>
  );
};
