import React from "react";
import { useAppState, useAppDispatch, AppStateConsumer } from "./useAppState";
import { Label } from "./Label";
import { Log } from "./App";

export const Email = React.memo(() => {
  // const {
  //   email,
  //   errors: { email: error },
  // } = useAppState();
  const { setField } = useAppDispatch();

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setField("email", event.currentTarget.value),
    [setField]
  );

  return (
    <AppStateConsumer>
      {({ email, errors: { email: error } }) => (
        <>
          <Log name="Email" />
          <Label
            text="Email"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={handleChange}
            error={error}
          />
        </>
      )}
    </AppStateConsumer>
  );
});

Email.displayName = "Email";
