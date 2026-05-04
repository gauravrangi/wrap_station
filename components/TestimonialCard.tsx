import Stars from "./Stars";

export default function TestimonialCard({
  name,
  vehicle,
  quote,
  rating,
  service,
}: {
  name: string;
  vehicle: string;
  quote: string;
  rating: number;
  service: string;
}) {
  return (
    <figure className="card flex h-full flex-col justify-between">
      <div>
        <Stars rating={rating} />
        <blockquote className="mt-4 text-sm leading-relaxed text-chrome">
          <p>“{quote}”</p>
        </blockquote>
      </div>
      <figcaption className="mt-6 border-t border-ink-700 pt-4">
        <p className="font-display text-sm font-semibold text-white">{name}</p>
        <p className="mt-1 text-xs text-chrome">{vehicle}</p>
        <p className="mt-2 text-xs uppercase tracking-widest text-accent">{service}</p>
      </figcaption>
    </figure>
  );
}
