import Link from 'next/link';

export default function PageCTA({
  href = '/quote',
  label = 'Request a quote',
}: {
  href?: string;
  label?: string;
}) {
  return (
    <div className="mt-16 text-center">
      <Link
        href={href}
        className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary-mid)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--color-btn-hover)]"
      >
        {label}
      </Link>
    </div>
  );
}
