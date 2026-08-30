import Link from 'next/link';
import { servicesCopy } from '@/lib/constants/services';

export default function PageCTA({
  href = '/quote',
  label = servicesCopy.ctaButton,
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
