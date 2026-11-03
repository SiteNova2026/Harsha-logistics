import { sectionFields as sectionLayout } from "@/lib/constants/quote";

// All form values are stored flat, keyed by the input "name", e.g. "company", "oceanPortOfLoading"
export type QuoteFormValues = Record<string, string>;
export type QuoteFormErrors = Record<string, string>;

export interface QuotePayload {
  company: string;
  name: string;
  email: string;
  phone: string;
  freights: Record<string, Record<string, string>>;
}

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const lowerFirst = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

// Field keys for a section, read from the layout in constants/quote.ts
// ("ocean") -> ["portOfLoading", "portOfDischarge", "incoterm", "weight", ...]
// Display-only fields (the fixed "LCL" on air) are skipped.
export const sectionFields = (sectionKey: string): string[] =>
  (sectionLayout[sectionKey] ?? [])
    .flat()
    .filter((f) => f.type !== "fixed")
    .map((f) => lowerFirst(f.suffix));

// input name for a section field: ("ocean", "portOfLoading") -> "oceanPortOfLoading"
export const fieldName = (sectionKey: string, field: string): string =>
  `${sectionKey}${cap(field)}`;

// The two route fields of a section = first two fields of its first row
// air: portOfLoading + placeOfDelivery, ocean: portOfLoading + portOfDischarge,
// road: placeOfLoading + placeOfDelivery, courier: countryOfLoading + countryOfDelivery
const routeFields = (sectionKey: string): [string, string] | null => {
  const first = sectionLayout[sectionKey]?.[0];
  if (!first || first.length < 2) return null;
  return [lowerFirst(first[0].suffix), lowerFirst(first[1].suffix)];
};

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

  // at least one freight type must have both route fields (from + to)
  const hasRoute = sectionKeys.some((key) => {
    const pair = routeFields(key);
    if (!pair) return false;
    return (
      values[fieldName(key, pair[0])]?.trim() &&
      values[fieldName(key, pair[1])]?.trim()
    );
  });

  if (!hasRoute) {
    errors.freight =
      "Please enter the loading and delivery locations for at least one freight type";
  } else if (values.oceanMode === "FCL" && !values.oceanContainerType) {
    errors.freight = "Please select a container type (20 feet or 40 feet) for FCL";
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