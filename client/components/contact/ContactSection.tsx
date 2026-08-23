"use client";

import { FormEvent, useState } from "react";
import { company } from "@/lib/constants/company";
import { contactCopy } from "@/lib/constants/contact";

export default function ContactSection() {


  return (
    <section className="contact-layout" aria-labelledby="contact-section-title">
      <div className="contact-layout-container c-width">
        <div className="contact-details">
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
              <p className="contact-detail-value normal-small">{contactCopy.gstin} {company.gstin}</p>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <h2 className="contact-form-title title-xl">{contactCopy.formTitle}</h2>
          <p className="contact-form-intro normal-small">{contactCopy.formIntro}</p>

          <div className="contact-form-fields">
            <label className="contact-field normal-xsmall">
              {contactCopy.fields.name}
              <input className="common-field normal-xsmall" name="name" type="text" required />
            </label>
            <label className="contact-field normal-xsmall">
              {contactCopy.fields.company}
              <input className="common-field normal-xsmall" name="company" type="text" />
            </label>
            <label className="contact-field normal-xsmall">
              {contactCopy.fields.email}
              <input className="common-field normal-xsmall" name="email" type="email" required />
            </label>
            <label className="contact-field normal-xsmall">
              {contactCopy.fields.phone}
              <input className="common-field normal-xsmall" name="phone" type="tel" />
            </label>
            <label className="contact-field normal-xsmall">
              {contactCopy.fields.message}
              <textarea className="common-field normal-xsmall" name="message" rows={4} required />
            </label>
          </div>

          <button className="contact-submit normal-small" type="button">
             {contactCopy.sending}
          </button>
        </form>
      </div>
    </section>
  );
}