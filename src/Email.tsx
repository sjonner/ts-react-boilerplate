import * as React from "react";
import { useAppState } from "./useAppState";
import { Label } from "./Label";

export const Email: React.FC = React.memo(() => {
  const {
    setField,
    state: {
      email,
      errors: { email: error },
    },
  } = useAppState();

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setField("email", event.currentTarget.value),
    [setField]
  );

  return (
    <Label text="Email" type="email" placeholder="Email address" value={email} onChange={handleChange} error={error} />
  );
});

Email.displayName = 'Email'