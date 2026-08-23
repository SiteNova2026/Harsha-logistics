import { company } from "@/lib/constants/company";
import { contactCopy } from "@/lib/constants/contact";

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <h3 className="contact-info-title title-xl">{contactCopy.sectionTitle}</h3>
      <div className="contact-info-list">
        <div>
          <p className="contact-info-label normal-xsmall">{contactCopy.office}</p>
          <p className="contact-info-value normal-small">
            {company.address["line-1"]}<br />
            {company.address["line-2"]}<br />
            {company.address["line-3"]}
          </p>
        </div>
        <div>
          <p className="contact-info-label normal-xsmall">{contactCopy.phone}</p>
          <p className="contact-info-value normal-small">{company.phone}</p>
          <p className="contact-info-value normal-small">{company.phoneAlt}</p>
        </div>
        <div>
          <p className="contact-info-label normal-xsmall">{contactCopy.email}</p>
          <a href={`mailto:${company.email}`} className="contact-info-value normal-small">
            {company.email}
          </a>
        </div>
      </div>
    </div>
  );
}
