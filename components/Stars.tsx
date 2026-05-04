export default function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill={i < rating ? "#e11d2a" : "#2a2e37"}
          aria-hidden
        >
          <path d="M10 1.5l2.6 5.7 6.2.7-4.6 4.3 1.3 6.1-5.5-3.2-5.5 3.2 1.3-6.1L1.2 7.9l6.2-.7L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}
