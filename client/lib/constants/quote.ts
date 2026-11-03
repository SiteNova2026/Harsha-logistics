export type FieldDef = {
  suffix: string; // becomes `${sectionKey}${suffix}`, e.g. oceanPortOfLoading
  label: string;
  placeholder?: string;
  type?: "text" | "select" | "textarea" | "fixed";
  options?: { value: string; label: string }[];
  fixedValue?: string; // for type "fixed" (display only, read-only)
  defaultValue?: string; // shown as selected if the user doesn't touch it
  showIf?: { suffix: string; equals: string }; // conditional field
};

export const quoteCopy = {
  hero: {
    eyebrow: "Request a Quote",
    title: "Tell us about your cargo.",
    description:
      "Share your shipment details and our operations desk will respond with a clear plan and competitive pricing usually within the same working day.",
  },
  formTitle: "Quote request form",
  userData: "User data",
  submit: "Request A Quote",
  successHeading: "How it works",
  successSteps: [
    "Share your route, cargo needs, and timing requirements.",
    "Our team reviews your request and recommends the best transport approach.",
    "Receive a clear quote and next-step support from our logistics specialists.",
  ],
  fields: {
    company: { label: "Company name *", placeholder: "Company Name" },
    name: { label: "Name *", placeholder: "Name" },
    email: { label: "Email *", placeholder: "mail@company.com" },
    phone: { label: "Phone number", placeholder: "+91 000 000 0000" },
    departure: { label: "City of departure", placeholder: "City Of Departure" },
    delivery: { label: "Delivery city", placeholder: "Delivery City" },
    incoterm: { label: "Incoterm", placeholder: "e.g. EXW, FOB, CIF" },
    weight: { label: "Weight (kg)", placeholder: "Weight (Kg)" },
    width: { label: "Width (cm)", placeholder: "Width (cm)" },
    height: { label: "Height (cm)", placeholder: "Height (cm)" },
    length: { label: "Length (cm)", placeholder: "Length (cm)" },
    package: { label: "Package type", placeholder: "Documents or parcel" },
    speed: { label: "Delivery speed", placeholder: "Standard or express" },
  },
  sections: [
    { key: "air", title: "Air Freight", icon: "plane" },
    { key: "ocean", title: "Ocean Freight", icon: "ship" },
    { key: "road", title: "Road Freight", icon: "truck" },
    { key: "courier", title: "International Courier", icon: "globe" },
  ],
};

/* ---------- Reusable field definitions ---------- */

const incoterm: FieldDef = {
  suffix: "Incoterm",
  label: "Incoterm",
  placeholder: "e.g. EXW, FOB, CIF",
};

const dimensionsRow: FieldDef[] = [
  { suffix: "Weight", label: "Weight (kg)", placeholder: "Weight (Kg)" },
  { suffix: "Width", label: "Width (cm)", placeholder: "Width (cm)" },
  { suffix: "Height", label: "Height (cm)", placeholder: "Height (cm)" },
  { suffix: "Length", label: "Length (cm)", placeholder: "Length (cm)" },
];

const commodity: FieldDef = {
  suffix: "Commodity",
  label: "Commodity",
  placeholder: "e.g. Textiles, Machinery",
};

const remarks: FieldDef = {
  suffix: "Remarks",
  label: "Remarks",
  placeholder: "Any additional details",
  type: "textarea",
};

/* ---------- Per-section layout: each inner array is one row ---------- */

export const sectionFields: Record<string, FieldDef[][]> = {
  air: [
    [
      { suffix: "PortOfLoading", label: "Port of loading", placeholder: "Port of loading" },
      { suffix: "PlaceOfDelivery", label: "Place of delivery", placeholder: "Place of delivery" },
      incoterm,
    ],
    dimensionsRow,
    [
      { suffix: "Mode", label: "Shipment type", type: "fixed", fixedValue: "LCL" },
      commodity,
    ],
    [remarks],
  ],

  ocean: [
    [
      { suffix: "PortOfLoading", label: "Port of loading", placeholder: "Port of loading" },
      { suffix: "PortOfDischarge", label: "Port of discharge", placeholder: "Port of discharge" },
      incoterm,
    ],
    dimensionsRow,
    [
      {
        suffix: "Mode",
        label: "LCL / FCL",
        type: "select",
        defaultValue: "LCL",
        options: [
          { value: "LCL", label: "LCL" },
          { value: "FCL", label: "FCL" },
        ],
      },
      {
        suffix: "ContainerType",
        label: "Container type",
        type: "select",
        showIf: { suffix: "Mode", equals: "FCL" },
        options: [
          { value: "", label: "Select container" },
          { value: "20ft", label: "20 feet" },
          { value: "40ft", label: "40 feet" },
        ],
      },
      commodity,
    ],
    [remarks],
  ],

  road: [
    [
      { suffix: "PlaceOfLoading", label: "Place of loading", placeholder: "Place of loading" },
      { suffix: "PlaceOfDelivery", label: "Place of delivery", placeholder: "Place of delivery" },
      commodity,
    ],
    dimensionsRow,
    [remarks],
  ],

  courier: [
    [
      { suffix: "CountryOfLoading", label: "Country of loading", placeholder: "Country of loading" },
      { suffix: "CountryOfDelivery", label: "Country of delivery", placeholder: "Country of delivery" },
      incoterm,
    ],
    [
      { suffix: "Package", label: "Package type", placeholder: "Documents or parcel" },
      commodity,
      { suffix: "Weight", label: "Weight (kg)", placeholder: "Weight (Kg)" },
      { suffix: "Speed", label: "Delivery speed", placeholder: "Standard or express" },
    ],
    [remarks],
  ],
};