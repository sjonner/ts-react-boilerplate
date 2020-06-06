import * as React from "react";
import { useReducer, useCallback } from "react";
import { AppState, appReducer, initialState } from "./appReducer";
import {
  setEmail,
  setPassword,
  setPasswordConfirm,
  validateForm,
} from "./appActions";

export const App: React.FC = () => {
  const [state, dispatch] = useReducer(appReducer, initialState as AppState);
  const { email, password, passwordConfirm, errors } = state;

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      dispatch(validateForm());
    },
    [dispatch]
  );

  return (
    <form noValidate onSubmit={handleSubmit}>
      <label className="Label">
        <span className="Label-text">Email:</span>
        <input
          className="Label-input"
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(setEmail(event.currentTarget.value))
          }
        />
        {errors.email && <span className="Label-error">{errors.email}</span>}
      </label>

      <label className="Label">
        <span className="Label-text">Password:</span>
        <input
          className="Label-input"
          type="password"
          placeholder="Choose password"
          value={password}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(setPassword(event.currentTarget.value))
          }
        />
        {errors.password && (
          <span className="Label-error">{errors.password}</span>
        )}
      </label>

      <label className="Label">
        <span className="Label-text">Password confirm:</span>
        <input
          className="Label-input"
          type="password"
          placeholder="Confirm password"
          value={passwordConfirm}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(setPasswordConfirm(event.currentTarget.value))
          }
        />
        {errors.passwordConfirm && (
          <span className="Label-error">{errors.passwordConfirm}</span>
        )}
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};
