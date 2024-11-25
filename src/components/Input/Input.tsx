import React, { useState } from "react";
import { validateField } from "../../utils/validators";
import "./Input.scss";

interface InputProps {
  type: string;
  name: "phone" | "email" | "fullName";
  label: string;
  onChange: (name: string, value: string) => void;
}

const Input: React.FC<InputProps> = ({ type, name, label, onChange }) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleBlur = () => {
    const validationError = validateField(name, value);
    setError(validationError);
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    onChange(name, val);
  };

  return (
    <div className="input">
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        className={`inputWrapper ${error ? "isInvalid" : ""} ${
          isFocused ? "isFocused" : ""
        }`}
      />
      <label className="label">{label}</label>
      {error && <span className="textDanger">{error}</span>}
    </div>
  );
};

export default Input;
