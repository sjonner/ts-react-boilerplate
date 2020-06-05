import * as React from "react";
import { useState } from "react";

type AppState = {};

export const App: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  return (
    <form
      noValidate
      onSubmit={(event: React.FormEvent) => {
        let emailError = "";
        let passwordError = "";
        let confirmError = "";

        if (!email.includes("@")) emailError = "Invalid password";
        else if (password.length < 7) passwordError = "Password is too short";
        else if (password !== passwordConfirm)
          confirmError = "Passwords should match";

        setErrors({
          email: emailError,
          password: passwordError,
          passwordConfirm: confirmError,
        });

        if (emailError || passwordError || confirmError) event.preventDefault();
      }}
    >
      <label className="Label">
        <span className="Label-text">Email:</span>
        <input
          className="Label-input"
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.currentTarget.value)
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
            setPassword(event.currentTarget.value)
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
            setPasswordConfirm(event.currentTarget.value)
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
