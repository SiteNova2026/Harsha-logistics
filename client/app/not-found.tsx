import Link from "next/link";
import { siteCopy } from "@/lib/constants/siteCopy";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <p className="not-found-code normal-xsmall">{siteCopy.notFound.code}</p>
        <h1 className="not-found-title title-3xl">{siteCopy.notFound.title}</h1>
        <p className="not-found-description normal-lg">{siteCopy.notFound.description}</p>
        <Link
          href="/"
          className="not-found-link normal-small"
        >
          {siteCopy.notFound.back}
        </Link>
      </div>
    </div>
  );
}
