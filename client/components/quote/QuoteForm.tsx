"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { quoteCopy } from "@/lib/constants/quote";
import { handleSubmitQuote } from "@/utils/quoteapi";
import {
  QuoteFormErrors,
  QuoteFormValues,
  createInitialQuoteValues,
} from "@/utils/quoteValidation";

type FieldChange = (e: ChangeEvent<HTMLInputElement>) => void;

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
  value,
  onChange,
  error,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: FieldChange;
  error?: string;
}) {
  return (
    <label className="quote-field normal-xxsmall">
      {label}
      <input
        className="common-field normal-xsmall"
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
      {error && <span className="contact-error text-red-500 text-xs">{error}</span>}
    </label>
  );
}

function QuoteIcon({ name }: { name: string }) {
  const props = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    "aria-hidden": true,
  } as const;

  if (name === "globe") {
    return <svg {...props}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></svg>;
  }

  if (name === "truck") {
    return <svg {...props}><path d="M14 18V6H2v12h3M9 18h6M19 18h2v-5l-3-4h-4v9h2" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>;
  }

  if (name === "ship") {
    return <svg {...props}><path d="M2 20a5 5 0 0 0 5-3 5 5 0 0 0 5 3 5 5 0 0 0 5-3 5 5 0 0 0 5 3M4 18l-2-7h20l-2 7M12 3v8M9 6h6" /></svg>;
  }

  if (name === "plane") {
    return <svg {...props}><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2Z" /></svg>;
  }

  return <svg {...props}><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" /></svg>;
}

function FreightSection({
  section,
  values,
  onChange,
}: {
  section: { key: string; title: string; icon: string };
  values: QuoteFormValues;
  onChange: FieldChange;
}) {
  const { title, icon, key: sectionKey } = section;
  const f = quoteCopy.fields;

  // small helper so every field gets its value + onChange automatically
  const bind = (suffix: string) => ({
    name: `${sectionKey}${suffix}`,
    value: values[`${sectionKey}${suffix}`] ?? "",
    onChange,
  });

  return (
    <fieldset className="quote-freight-section">
      <legend className="quote-section-heading">
        <span className="quote-section-icon normal-small" aria-hidden="true"><QuoteIcon name={icon} /></span>
        <span className="quote-section-title normal-xsmall">{title}</span>
      </legend>

      <div className="quote-fields quote-fields-route">
        <Field label={f.departure.label} placeholder={f.departure.placeholder} {...bind("Departure")} />
        <Field label={f.delivery.label} placeholder={f.delivery.placeholder} {...bind("Delivery")} />
        <Field label={f.incoterm.label} placeholder={f.incoterm.placeholder} {...bind("Incoterm")} />
      </div>

      {sectionKey !== "courier" && (
        <div className="quote-fields quote-fields-dimensions">
          <Field label={f.weight.label} placeholder={f.weight.placeholder} {...bind("Weight")} />
          <Field label={f.width.label} placeholder={f.width.placeholder} {...bind("Width")} />
          <Field label={f.height.label} placeholder={f.height.placeholder} {...bind("Height")} />
          <Field label={f.length.label} placeholder={f.length.placeholder} {...bind("Length")} />
        </div>
      )}

      {sectionKey === "courier" && (
        <div className="quote-fields quote-fields-route">
          <Field label={f.package.label} placeholder={f.package.placeholder} {...bind("Package")} />
          <Field label={f.weight.label} placeholder={f.weight.placeholder} {...bind("Weight")} />
          <Field label={f.speed.label} placeholder={f.speed.placeholder} {...bind("Speed")} />
        </div>
      )}
    </fieldset>
  );
}

export default function QuoteForm() {
  const sectionKeys = quoteCopy.sections.map((s) => s.key);

  const [values, setValues] = useState<QuoteFormValues>(() =>
    createInitialQuoteValues(sectionKeys)
  );
  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [loading, setLoading] = useState(false);

  const handleChange: FieldChange = (e) => {
   const { name } = e.target;
    let { value } = e.target;

    if (name === "phone") {
    value = value.replace(/\D/g, ""); // keep digits only
  }
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "", freight: "" }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await handleSubmitQuote(values, sectionKeys, setErrors, () =>
      setValues(createInitialQuoteValues(sectionKeys))
    );
    setLoading(false);
  };

  return (
    <section className="quote-layout" aria-labelledby="quote-form-title">
      <div className="quote-form-container c-width">
        <form className="quote-form reveal-on-scroll" onSubmit={onSubmit} noValidate>
          <h2 id="quote-form-title" className="sr-only">{quoteCopy.formTitle}</h2>

          <fieldset className="quote-user-section reveal-on-scroll">
            <legend className="quote-section-heading">
              <span className="quote-section-icon normal-small" aria-hidden="true"><QuoteIcon name="send" /></span>
              <span className="quote-section-title normal-xsmall">{quoteCopy.userData}</span>
            </legend>
            <div className="quote-fields quote-fields-company">
              <Field
                label={quoteCopy.fields.company.label}
                name="company"
                placeholder={quoteCopy.fields.company.placeholder}
                required
                value={values.company}
                onChange={handleChange}
                error={errors.company}
              />
            </div>
            <div className="quote-fields quote-fields-user">
              <Field
                label={quoteCopy.fields.name.label}
                name="name"
                placeholder={quoteCopy.fields.name.placeholder}
                required
                value={values.name}
                onChange={handleChange}
                error={errors.name}
              />
              <Field
                label={quoteCopy.fields.email.label}
                name="email"
                type="email"
                placeholder={quoteCopy.fields.email.placeholder}
                required
                value={values.email}
                onChange={handleChange}
                error={errors.email}
              />
              <Field
                label={quoteCopy.fields.phone.label}
                name="phone"
                type="tel"
                placeholder={quoteCopy.fields.phone.placeholder}
                value={values.phone}
                onChange={handleChange}
                error={errors.phone}
              />
            </div>
          </fieldset>

          {quoteCopy.sections.map((section) => (
            <FreightSection
              key={section.key}
              section={section}
              values={values}
              onChange={handleChange}
            />
          ))}

          {errors.freight && <p className="contact-error text-red-500">{errors.freight}</p>}

          <button className="quote-submit normal-small font-bold" type="submit" disabled={loading}>
            {loading ? "Sending..." : quoteCopy.submit}
          </button>
        </form>
      </div>
    </section>
  );
}