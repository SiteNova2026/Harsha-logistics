export function formatPhone(value: string) {
  return value.replace(/\D/g, "").slice(0, 10);
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}
