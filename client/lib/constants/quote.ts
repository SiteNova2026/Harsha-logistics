export const quoteCopy = {
  hero: {
    eyebrow: "Request a Quote",
    title: "Tell us about your cargo.",
    description:
      "Share your shipment details and our operations desk will respond with a clear plan and competitive pricing — usually within the same working day.",
  },
  formTitle: "Quote request form",
  userData: "User data",
  submit: "Request A Quote",
  sending: "Sending...",
  sent: "Quote request sent",
  successHeading: "How it works",
  successSteps: [
    "Share your route, cargo needs, and timing requirements.",
    "Our team reviews your request and recommends the best transport approach.",
    "Receive a clear quote and next-step support from our logistics specialists.",
  ],
  fields: {
    company: { label: "Company name *", placeholder: "Company Name" }, name: { label: "Name *", placeholder: "Name" },
    email: { label: "Email *", placeholder: "mail@company.com" }, phone: { label: "Phone number", placeholder: "+91 000 000 0000" },
    departure: { label: "City of departure", placeholder: "City Of Departure" }, delivery: { label: "Delivery city", placeholder: "Delivery City" },
    incoterm: { label: "Incoterm", placeholder: "e.g. EXW, FOB, CIF" }, weight: { label: "Weight (kg)", placeholder: "Weight (Kg)" },
    width: { label: "Width (cm)", placeholder: "Width (cm)" }, height: { label: "Height (cm)", placeholder: "Height (cm)" },
    length: { label: "Length (cm)", placeholder: "Length (cm)" }, package: { label: "Package type", placeholder: "Documents or parcel" },
    speed: { label: "Delivery speed", placeholder: "Standard or express" },
  },
  sections: [
    { key: "air", title: "Air Freight", icon: "plane" },
    { key: "ocean", title: "Ocean Freight", icon: "ship" },
    { key: "road", title: "Road Freight", icon: "truck" },
    { key: "courier", title: "International Courier", icon: "globe" },
  ],
};