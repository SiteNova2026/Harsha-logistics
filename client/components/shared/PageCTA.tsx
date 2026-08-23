import Link from 'next/link';
import { siteCopy } from '@/lib/constants/siteCopy';

export default function PageCTA({
  href = '/quote',
  label = siteCopy.services.ctaButton,
}: {
  href?: string;
  label?: string;
}) {
  return (
    <div className="page-cta">
      <Link
        href={href}
        className="page-cta-link normal-small"
      >
        {label}
      </Link>
    </div>
  );
}
