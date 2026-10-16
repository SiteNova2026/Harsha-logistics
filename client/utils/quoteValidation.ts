// All form values are stored flat, keyed by the input "name", e.g. "company", "airDeparture"
export type QuoteFormValues = Record<string, string>;
export type QuoteFormErrors = Record<string, string>;

export interface QuotePayload {
  company: string;
  name: string;
  email: string;
  phone: string;
  freights: Record<string, Record<string, string>>;
}

const STANDARD_FIELDS = ["departure", "delivery", "incoterm", "weight", "width", "height", "length"];
const COURIER_FIELDS = ["departure", "delivery", "incoterm", "package", "weight", "speed"];

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const sectionFields = (sectionKey: string): string[] =>
  sectionKey === "courier" ? COURIER_FIELDS : STANDARD_FIELDS;

// input name for a section field: ("air", "departure") -> "airDeparture"
export const fieldName = (sectionKey: string, field: string): string =>
  `${sectionKey}${cap(field)}`;

export const createInitialQuoteValues = (sectionKeys: string[]): QuoteFormValues => {
  const values: QuoteFormValues = { company: "", name: "", email: "", phone: "" };
  sectionKeys.forEach((key) => {
    sectionFields(key).forEach((f) => {
      values[fieldName(key, f)] = "";
    });
  });
  return values;
};

export const validateQuoteForm = (
  values: QuoteFormValues,
  sectionKeys: string[]
): QuoteFormErrors => {
  const errors: QuoteFormErrors = {};

  if (!values.company.trim()) errors.company = "Company name is required";
  if (!values.name.trim()) errors.name = "Name is required";

  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Invalid email";
  }

  if (values.phone.trim() && !/^[0-9+\s-]{7,20}$/.test(values.phone)) {
    errors.phone = "Enter a valid phone number";
  }

  // at least one freight type must have departure + delivery
  const hasRoute = sectionKeys.some(
    (key) =>
      values[fieldName(key, "departure")]?.trim() &&
      values[fieldName(key, "delivery")]?.trim()
  );
  if (!hasRoute) {
    errors.freight = "Please enter departure and delivery city for at least one freight type";
  }

  return errors;
};

// Turns the flat form values into the structure the API/database expects
export const buildQuotePayload = (
  values: QuoteFormValues,
  sectionKeys: string[]
): QuotePayload => {
  const freights: Record<string, Record<string, string>> = {};

  sectionKeys.forEach((key) => {
    const data: Record<string, string> = {};
    sectionFields(key).forEach((f) => {
      const v = values[fieldName(key, f)]?.trim();
      if (v) data[f] = v;
    });
    if (Object.keys(data).length > 0) freights[key] = data; // skip empty sections
  });

  return {
    company: values.company.trim(),
    name: values.name.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    freights,
  };
};