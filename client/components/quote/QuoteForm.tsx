"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { quoteCopy, sectionFields, FieldDef } from "@/lib/constants/quote";
import { handleSubmitQuote } from "@/utils/quoteapi";
import {
  QuoteFormErrors,
  QuoteFormValues,
  createInitialQuoteValues,
} from "@/utils/quoteValidation";

type InputEl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
type FieldChange = (e: ChangeEvent<InputEl>) => void;

function Field({
  label,
  name,
  placeholder = "",
  type = "text",
  required = false,
  value,
  onChange,
  error,
  options,
  fixed = false,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string; // text | email | tel | select | textarea
  required?: boolean;
  value: string;
  onChange: FieldChange;
  error?: string;
  options?: { value: string; label: string }[];
  fixed?: boolean;
}) {
  const cls = "common-field normal-xsmall";

  return (
    <label className="quote-field normal-xxsmall">
      {label}
      {type === "select" ? (
        <span className="quote-select-wrap">
          <select className={cls} name={name} value={value} onChange={onChange}>
            {options?.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <span className="quote-select-icon" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </span>
      ) : type === "textarea" ? (
        <textarea
          className={cls}
          name={name}
          placeholder={placeholder}
          rows={3}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          className={cls}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          readOnly={fixed}
        />
      )}
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
  const rows = sectionFields[sectionKey] ?? [];
  const allFields = rows.flat();

  const getVal = (suffix: string) => values[`${sectionKey}${suffix}`] ?? "";

  // Current value of a field, falling back to its default (e.g. LCL)
  const currentVal = (suffix: string) =>
    getVal(suffix) || allFields.find((x) => x.suffix === suffix)?.defaultValue || "";

  const isVisible = (f: FieldDef) =>
    !f.showIf || currentVal(f.showIf.suffix) === f.showIf.equals;

  return (
    <fieldset className="quote-freight-section">
      <legend className="quote-section-heading">
        <span className="quote-section-icon normal-small" aria-hidden="true">
          <QuoteIcon name={icon} />
        </span>
        <span className="quote-section-title normal-xsmall">{title}</span>
      </legend>

      {rows.map((row, i) => {
        const visible = row.filter(isVisible);
        const cls =
          visible.length === 1
            ? "quote-fields quote-fields-company"
            : visible.length === 2
            ? "quote-fields quote-fields-two"
            : visible.length === 4
            ? "quote-fields quote-fields-dimensions"
            : "quote-fields quote-fields-route";

        return (
          <div className={cls} key={i}>
            {visible.map((f) => (
              <Field
                key={f.suffix}
                label={f.label}
                placeholder={f.placeholder}
                type={f.type === "fixed" ? "text" : f.type}
                options={f.options}
                fixed={f.type === "fixed"}
                name={`${sectionKey}${f.suffix}`}
                value={f.type === "fixed" ? f.fixedValue ?? "" : currentVal(f.suffix)}
                onChange={onChange}
              />
            ))}
          </div>
        );
      })}
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

     const numericFields = [
    "phone",
    "airWeight",
    "airHeight",
    "airLength",
    "airWidth",
    "oceanWeight",
    "oceanHeight",
    "oceanWeight",
    "oceanWidth",
    "roadWidth",
    "roadHeight",
    "roadLength",
    "courierWeight"
  ];

  if (numericFields.includes(name)) {
    value = value.replace(/\D/g, "");
  }

    setValues((prev) => {
      const next = { ...prev, [name]: value };
      // Switching ocean back to LCL clears the container choice
      if (name === "oceanMode" && value !== "FCL") {
        next.oceanContainerType = "";
      }
      return next;
    });
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
              <span className="quote-section-icon normal-small" aria-hidden="true">
                <QuoteIcon name="send" />
              </span>
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

          {errors.freight && (
            <p className="contact-error text-red-500 uppercase text-sm">{errors.freight}</p>
          )}

          <button className="quote-submit normal-small font-bold" type="submit" disabled={loading}>
            {loading ? "Sending..." : quoteCopy.submit}
          </button>
        </form>
      </div>
    </section>
  );
}