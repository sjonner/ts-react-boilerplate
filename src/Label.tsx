import * as React from "react";

type LabelProps = {
  text: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  error?: string;
};

export const Label: React.FC<LabelProps> = ({
  type = "text",
  text,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <label className="Label">
      <span className="Label-text">{text}:</span>
      <input
        className="Label-input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <span className="Label-error">{error}</span>}
    </label>
  );
};
