import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import { faIR } from "date-fns-jalali/locale";
import "react-datepicker/dist/react-datepicker.css";
import "./ValidationForm.scss";

// ثبت زبان فارسی
registerLocale("fa", faIR);

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date | null;
  phone: string;
  gender: string;
}

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("نام لازم است.")
    .min(2, "باید حداقل ۲ کاراکتر باشد."),
  lastName: Yup.string()
    .required("نام خانوادگی لازم است.")
    .min(2, "باید حداقل ۲ کاراکتر باشد."),
  email: Yup.string()
    .required("ایمیل لازم است.")
    .email("فرمت ایمیل معتبر نیست."),
  birthDate: Yup.date()
    .nullable()
    .required("تاریخ تولد لازم است.")
    .typeError("تاریخ معتبر وارد کنید."),
  phone: Yup.string()
    .required("شماره تلفن لازم است.")
    .matches(/^[0-9]+$/, "فقط اعداد مجاز هستند.")
    .min(10, "باید حداقل ۱۰ رقم باشد."),
  gender: Yup.string().required("انتخاب جنسیت لازم است."),
});

const ValidationForm: React.FC = () => {
  const initialValues: FormValues = {
    firstName: "",
    lastName: "",
    email: "",
    birthDate: null,
    phone: "",
    gender: "",
  };

  const handleSubmit = (values: FormValues, { resetForm }: any) => {
    console.log("مقادیر فرم:", values);
    alert("فرم ارسال شد!");
    resetForm();
  };

  return (
    <div className="form-container">
      <h1 className="form-title">فرم ثبت‌ نام</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, setFieldTouched, errors, touched }) => (
          <Form className="form">
            {/* نام */}
            <div className="form-group">
              <label htmlFor="firstName">نام</label>
              <Field
                name="firstName"
                type="text"
                className={`form-control ${
                  touched.firstName && errors.firstName
                    ? "error-border"
                    : touched.firstName
                    ? "success-border"
                    : ""
                }`}
                placeholder="نام خود را وارد کنید"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="error-message"
              />
            </div>

            {/* نام خانوادگی */}
            <div className="form-group">
              <label htmlFor="lastName">نام خانوادگی</label>
              <Field
                name="lastName"
                type="text"
                className={`form-control ${
                  touched.lastName && errors.lastName
                    ? "error-border"
                    : touched.lastName
                    ? "success-border"
                    : ""
                }`}
                placeholder="نام خانوادگی خود را وارد کنید"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="error-message"
              />
            </div>

            {/* ایمیل */}
            <div className="form-group">
              <label htmlFor="email">ایمیل</label>
              <Field
                name="email"
                type="email"
                className={`form-control ${
                  touched.email && errors.email
                    ? "error-border"
                    : touched.email
                    ? "success-border"
                    : ""
                }`}
                placeholder="ایمیل خود را وارد کنید"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>

            {/* تاریخ تولد */}
            <div className="form-group">
              <label htmlFor="birthDate">تاریخ تولد</label>
              <DatePicker
                selected={values.birthDate}
                onChange={(date: Date | null) =>
                  setFieldValue("birthDate", date)
                }
                onBlur={() => setFieldTouched("birthDate", true)}
                locale="fa"
                className={`form-control ${
                  touched.birthDate && errors.birthDate ? "error-border" : touched.birthDate ? "success-border": ""
                }`}
                placeholderText="تاریخ تولد خود را وارد کنید"
                dateFormat="yyyy-MM-dd"
                popperPlacement="bottom-start"
              />
              {touched.birthDate && errors.birthDate && (
                <div className="error-message">{errors.birthDate}</div>
              )}
            </div>

            {/* شماره تلفن */}
            <div className="form-group">
              <label htmlFor="phone">شماره تلفن</label>
              <Field
                name="phone"
                type="text"
                className={`form-control ${
                  touched.phone && errors.phone
                    ? "error-border"
                    : touched.phone
                    ? "success-border"
                    : ""
                }`}
                placeholder="شماره تلفن خود را وارد کنید"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="error-message"
              />
            </div>

            {/* جنسیت */}
            <div className="form-group">
              <label htmlFor="gender">جنسیت</label>
              <Field
                name="gender"
                as="select"
                className={`form-control ${
                  touched.gender && errors.gender
                    ? "error-border"
                    : touched.gender
                    ? "success-border"
                    : ""
                }`}
              >
                <option value="">جنسیت خود را انتخاب کنید</option>
                <option value="male">مرد</option>
                <option value="female">زن</option>
                <option value="other">دیگر</option>
              </Field>
              <ErrorMessage
                name="gender"
                component="div"
                className="error-message"
              />
            </div>

            {/* دکمه ارسال */}
            <button
              type="submit"
              className="form-submit"
              disabled={Object.keys(errors).length > 0}
            >
              ارسال
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ValidationForm;
