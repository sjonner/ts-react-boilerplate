import * as React from "react";
import { useAppState } from "./useAppState";
import { setTermsAccepted } from "./appActions";

export const Terms: React.FC = () => {
  const { dispatch } = useAppState();

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(setTermsAccepted(event.currentTarget.checked)),
    [dispatch]
  );

  return (
    <label className="Label">
      <input type="checkbox" onChange={handleChange} />
      Accept terms and conditions
    </label>
  );
};
