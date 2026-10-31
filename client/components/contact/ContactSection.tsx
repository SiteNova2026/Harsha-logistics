"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { company } from "@/lib/constants/company";
import { contactCopy } from "@/lib/constants/contact";
import { handleSubmitContact } from "@/utils/contactapi";
import {
  ContactFormValues,
  ContactFormErrors,
  initialContactValues,
} from "@/utils/contactValidation";

export default function ContactSection() {
  const [values, setValues] = useState<ContactFormValues>(initialContactValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await handleSubmitContact(values, setErrors, () => setValues(initialContactValues));
    setLoading(false);
  };

  return (
    <section className="contact-layout" aria-labelledby="contact-section-title">
      <div className="contact-layout-container c-width">
        <div className="contact-details reveal-on-scroll" data-reveal="left">
          <p className="contact-eyebrow normal-xsmall">{contactCopy.sectionTitle}</p>
          <h2 id="contact-section-title" className="contact-title title-3xl">
            {company.name}
          </h2>

          <div className="contact-detail-list">
            <div className="contact-detail">
              <h3 className="contact-detail-label normal-xsmall">{contactCopy.office}</h3>
              <p className="contact-detail-value normal-small">
                {company.address["line-1"]}
                <br />
                {company.address["line-2"]}
                <br />
                {company.address["line-3"]}
              </p>
            </div>
            <div className="contact-detail">
              <h3 className="contact-detail-label normal-xsmall">{contactCopy.phone}</h3>
              <p className="contact-detail-value normal-small">{company.phone}</p>
              <p className="contact-detail-value normal-small">{company.phoneAlt}</p>
            </div>
            <div className="contact-detail">
              <h3 className="contact-detail-label normal-xsmall">{contactCopy.email}</h3>
              <a className="contact-detail-value normal-small" href={`mailto:${company.email}`}>
                {company.email}
              </a>
              <a className="contact-detail-value normal-small" href={`mailto:${company.emailAlt}`}>
                {company.emailAlt}
              </a>
            </div>
            <div className="contact-detail">
              <h3 className="contact-detail-label normal-xsmall">{contactCopy.credentials}</h3>
              <p className="contact-detail-value normal-small">{company.licence}</p>
              <p className="contact-detail-value normal-small">
                {contactCopy.gstin} {company.gstin}
              </p>
            </div>
          </div>
        </div>

        <form
          className="contact-form reveal-on-scroll"
          data-reveal="right"
          onSubmit={onSubmit}
          noValidate
        >
          <h2 className="contact-form-title title-xl">{contactCopy.formTitle}</h2>
          <p className="contact-form-intro normal-small">{contactCopy.formIntro}</p>

          <div className="contact-form-fields">
            <label className="contact-field normal-xsmall">
              {contactCopy.fields.name}
              <input
                className="common-field normal-xsmall"
                name="fullName"
                type="text"
                value={values.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <span className="contact-error text-red-500">{errors.fullName}</span>}
            </label>
            <label className="contact-field normal-xsmall">
              {contactCopy.fields.company}
              <input
                className="common-field normal-xsmall"
                name="companyName"
                type="text"
                value={values.companyName}
                onChange={handleChange}
              />
            </label>
            <label className="contact-field normal-xsmall">
              {contactCopy.fields.email}
              <input
                className="common-field normal-xsmall"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <span className="contact-error text-red-500">{errors.email}</span>}
            </label>
            <label className="contact-field normal-xsmall">
              {contactCopy.fields.phone}
              <input
                className="common-field normal-xsmall"
                name="phoneNumber"
                type="tel"
                value={values.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && <span className="contact-error text-red-500">{errors.phoneNumber}</span>}
            </label>
            <label className="contact-field normal-xsmall">
              {contactCopy.fields.message}
              <textarea
                className="common-field normal-xsmall"
                name="message"
                rows={4}
                value={values.message}
                onChange={handleChange}
              />
              {errors.message && <span className="contact-error text-red-500">{errors.message}</span>}
            </label>
          </div>

          <button
            className="contact-submit normal-small font-bold"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : contactCopy.send}
          </button>
        </form>
      </div>
    </section>
  );
}