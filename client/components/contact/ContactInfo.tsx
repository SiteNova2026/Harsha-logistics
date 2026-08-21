import { company } from "@/lib/constants/company";

export default function ContactInfo() {
  return (
    <div className="rounded-[2rem] bg-[#071d34] p-8 text-white shadow-sm">
      <h3 className="text-2xl font-semibold">Reach us</h3>
      <div className="mt-8 space-y-6 text-slate-200">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Location</p>
          <p className="mt-2 text-base leading-7">{company.address}</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Phone</p>
          <p className="mt-2 text-base">{company.phone}</p>
          <p className="mt-1 text-base">{company.phoneAlt}</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Email</p>
          <a href={`mailto:${company.email}`} className="mt-2 inline-block text-base text-sky-200 hover:text-white">
            {company.email}
          </a>
        </div>
      </div>
    </div>
  );
}
