import React from "react";
import { useAppState, useAppDispatch } from "./useAppState";

export const Terms: React.FC = () => {
  const { termsAccepted } = useAppState();
  const { setField } = useAppDispatch();

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
