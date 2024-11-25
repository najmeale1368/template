import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { validateField } from "../../utils/validators";
import "./InputDate.scss";

interface InputDateProps {
  name: "birthDate" | "eventDate";
  label: string;
  onChange: (name: string, value: string) => void;
}

const InputDate: React.FC<InputDateProps> = ({ name, label, onChange }) => {
  const [value, setValue] = useState<string | null>(null);
  const [error, setError] = useState<string>("");

  const handleBlur = () => {
    if (name === "birthDate" || name === "eventDate") return;

    const validationError = validateField(name, value);
    setError(validationError);
  };

  const handleChange = (value: any) => {
    const dateValue = value ? value.format("YYYY/MM/DD") : null;

    setValue(dateValue);
    onChange(name, dateValue);

    if (name === "birthDate" || name === "eventDate") return;

    const validationError = validateField(name, dateValue);
    setError(validationError);
  };

  return (
    <div className="datePickerInput">
      {/* <label className="Label">{label}</label> */}
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        value={value}
        onChange={handleChange}
        placeholder="تاریخ را انتخاب کنید"
        className={`inputWrapper ${error ? "isInvalid" : ""}`}
      />
      {error && <span className="textDanger">{error}</span>}
    </div>
  );
};

export default InputDate;
