import { hot } from "react-hot-loader/root";
import React from "react";
import { useCallback } from "react";
import { useAppState } from "./useAppState";
import { Email } from "./Email";
import { Password } from "./Password";
import { PasswordConfirm } from "./PasswordConfirm";
import { Terms } from "./Terms";
import { Label } from "./Label";

export const App: React.FC = () => {
  const {
    state: { street, houseNumber, city, zipCode, termsAccepted, step, errors },
    setField,
    validateForm,
  } = useAppState();

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      validateForm(step);
    },
    [step]
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
          <Label
            text="Street"
            placeholder="Street"
            value={street}
            onChange={(e) => setField("street", e.currentTarget.value)}
            error={errors["email"]}
          />
          {/* <Label
            text="House number"
            placeholder="House number"
            value={houseNumber}
            onChange={handleChange}
            error={error}
          />
          <Label text="City" placeholder="City" value={city} onChange={handleChange} error={error} />
          <Label text="Zipcode" placeholder="Zipcode" value={zipCode} onChange={handleChange} error={error} /> */}
          <button type="button" onClick={() => setField("step", step - 1)}>
            Previous
          </button>
          <button type="submit">Submit</button>
        </>
      )}

      {step > 2 && <div className="Message Message--succes">Thanks!</div>}
    </form>
  );
};

export const HotApp = hot(App);
