import * as React from "react";
import { useCallback } from "react";
import { validateForm, setStep } from "./appActions";
import { useAppState } from "./useAppState";
import { Email } from "./Email";
import { Password } from "./Password";
import { PasswordConfirm } from "./PasswordConfirm";
import { Terms } from "./Terms";

export const App: React.FC = () => {
  const {
    state: { termsAccepted, step },
    dispatch,
  } = useAppState();

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      dispatch(validateForm(step));
    },
    [dispatch, step]
  );

  return (
    <form noValidate onSubmit={handleSubmit}>
      {step === 1 && (
        <>
          <Email />
          <Password />
          <PasswordConfirm />
          <Terms />
          <button type="submit" disabled={!termsAccepted}>
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <div>Address</div>
          <button type="button" onClick={() => dispatch(setStep(step - 1))}>
            Previous
          </button>
          <button type="submit">Submit</button>
        </>
      )}

      {step > 2 && <div className="Message Message--succes">Thanks!</div>}
    </form>
  );
};
