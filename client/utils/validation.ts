export interface ContactFormValues {
  fullName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export const initialContactValues: ContactFormValues = {
  fullName: "",
  companyName: "",
  email: "",
  phoneNumber: "",
  message: "",
};

export const validateContactForm = (values: ContactFormValues): ContactFormErrors => {
  const errors: ContactFormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Full name is required";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Invalid email";
  }

  if (!values.phoneNumber.trim()) {
    errors.phoneNumber = "Phone number is required";
  } else if (!/^[0-9]+$/.test(values.phoneNumber)) {
    errors.phoneNumber = "Phone number must contain digits only";
  } else if (values.phoneNumber.length < 10) {
    errors.phoneNumber = "Phone number must be 10 digits";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required";
  }

  return errors;
};