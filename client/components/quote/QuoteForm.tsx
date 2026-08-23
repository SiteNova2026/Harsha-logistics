"use client";

import { FormEvent, useState } from "react";
import { quoteCopy } from "@/lib/constants/quote";

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="quote-field normal-xxsmall">
      {label}
      <input className="common-field normal-xsmall" name={name} type={type} placeholder={placeholder} required={required} />
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

function FreightSection({ section }: { section: { key: string; title: string; icon: string } }) {
  const { title, icon, key: sectionKey } = section;

  return (
    <fieldset className="quote-freight-section">
      <legend className="quote-section-heading">
        <span className="quote-section-icon normal-small" aria-hidden="true"><QuoteIcon name={icon} /></span>
        <span className="quote-section-title normal-xsmall">{title}</span>
      </legend>
      <div className="quote-fields quote-fields-route">
        <Field label={quoteCopy.fields.departure.label} name={`${sectionKey}Departure`} placeholder={quoteCopy.fields.departure.placeholder} />
        <Field label={quoteCopy.fields.delivery.label} name={`${sectionKey}Delivery`} placeholder={quoteCopy.fields.delivery.placeholder} />
        <Field label={quoteCopy.fields.incoterm.label} name={`${sectionKey}Incoterm`} placeholder={quoteCopy.fields.incoterm.placeholder} />
      </div>
      {sectionKey !== "courier" && (
        <div className="quote-fields quote-fields-dimensions">
          <Field label={quoteCopy.fields.weight.label} name={`${sectionKey}Weight`} placeholder={quoteCopy.fields.weight.placeholder} />
          <Field label={quoteCopy.fields.width.label} name={`${sectionKey}Width`} placeholder={quoteCopy.fields.width.placeholder} />
          <Field label={quoteCopy.fields.height.label} name={`${sectionKey}Height`} placeholder={quoteCopy.fields.height.placeholder} />
          <Field label={quoteCopy.fields.length.label} name={`${sectionKey}Length`} placeholder={quoteCopy.fields.length.placeholder} />
        </div>
      )}
      {sectionKey === "courier" && (
        <div className="quote-fields quote-fields-route">
          <Field label={quoteCopy.fields.package.label} name="courierPackage" placeholder={quoteCopy.fields.package.placeholder} />
          <Field label={quoteCopy.fields.weight.label} name="courierWeight" placeholder={quoteCopy.fields.weight.placeholder} />
          <Field label={quoteCopy.fields.speed.label} name="courierSpeed" placeholder={quoteCopy.fields.speed.placeholder} />
        </div>
      )}
    </fieldset>
  );
}

export default function QuoteForm() {


  return (
    <section className="quote-layout" aria-labelledby="quote-form-title">
      <div className="quote-form-container c-width">
        <form className="quote-form">
          <h2 id="quote-form-title" className="sr-only">{quoteCopy.formTitle}</h2>

          <fieldset className="quote-user-section">
            <legend className="quote-section-heading">
              <span className="quote-section-icon normal-small" aria-hidden="true"><QuoteIcon name="send" /></span>
              <span className="quote-section-title normal-xsmall">{quoteCopy.userData}</span>
            </legend>
            <div className="quote-fields quote-fields-company">
              <Field label={quoteCopy.fields.company.label} name="company" placeholder={quoteCopy.fields.company.placeholder} required />
            </div>
            <div className="quote-fields quote-fields-user">
              <Field label={quoteCopy.fields.name.label} name="name" placeholder={quoteCopy.fields.name.placeholder} required />
              <Field label={quoteCopy.fields.email.label} name="email" placeholder={quoteCopy.fields.email.placeholder} type="email" required />
              <Field label={quoteCopy.fields.phone.label} name="phone" placeholder={quoteCopy.fields.phone.placeholder} type="tel" />
            </div>
          </fieldset>

          {quoteCopy.sections.map((section) => (
            <FreightSection key={section.key} section={section} />
          ))}

          <button className="quote-submit normal-small" type="button">
            {quoteCopy.sent }
          </button>
        </form>
      </div>
    </section>
  );
}