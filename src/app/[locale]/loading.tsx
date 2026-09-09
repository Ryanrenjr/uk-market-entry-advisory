export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <span
        aria-hidden
        className="h-8 w-8 animate-spin rounded-full border-2 border-primary-dark/15 border-t-accent"
      />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
