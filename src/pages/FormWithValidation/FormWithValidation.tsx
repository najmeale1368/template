import React, { useState } from "react";
import Input from "@/components/Input/Input";
import InputDate from "@/components/InputDate/InputDate";
import { Button } from "@/components";

const FormWithValidation: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phone: "",
    birthDate: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Input
              name="fullName"
              label="نام و نام خانوادگی"
              type="text"
              onChange={handleInputChange}
            />

            <Input
              name="email"
              label="ایمیل"
              type="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-lg-6">
            <Input
              name="phone"
              label="شماره تلفن"
              type="text"
              onChange={handleInputChange}
            />
            <InputDate
              name="birthDate"
              label="تاریخ تولد"
              onChange={handleInputChange}
            />
          </div>
          <Button label=" ثبت رزومه" />
        </div>
      </div>
    </form>
  );
};

export default FormWithValidation;
