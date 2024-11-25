export const validateField = (name: string, value: string | null): string => {
  if (value === null || value === "") {
    return "این فیلد الزامی است";
  }

  switch (name) {
    case "phone":
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(value)) {
        return "شماره تلفن معتبر نیست";
      }
      break;

    case "email":
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailRegex.test(value)) {
        return "ایمیل معتبر نیست";
      }
      break;

    case "fullName":
      if (value.length < 3) {
        return "نام و نام خانوادگی باید حداقل 3 کاراکتر باشد";
      }
      break;

    default:
      break;
  }

  return "";
};
