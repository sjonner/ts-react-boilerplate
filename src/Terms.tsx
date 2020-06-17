import * as React from "react";
import { useAppState } from "./useAppState";
import { setTermsAccepted } from "./appActions";

export const Terms: React.FC = () => {
  const {
    state: { termsAccepted },
    setField,
  } = useAppState();

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setField("termsAccepted", event.currentTarget.checked),
    [setField]
  );

  return (
    <label className="Label">
      <input type="checkbox" onChange={handleChange} checked={termsAccepted} />
      Accept terms and conditions
    </label>
  );
};
