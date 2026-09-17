import Image from "next/image";

interface SplitImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export default function SplitImage({ src, alt, caption, className = "" }: SplitImageProps) {
  return (
    <div
      className={`group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl shadow-primary-dark/15 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05] motion-reduce:group-hover:scale-100"
      />
      {caption && (
        <>
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-primary-dark/55 via-transparent to-transparent"
          />
          <p className="absolute bottom-5 left-5 text-caption uppercase text-white/80">
            {caption}
          </p>
        </>
      )}
    </div>
  );
}
