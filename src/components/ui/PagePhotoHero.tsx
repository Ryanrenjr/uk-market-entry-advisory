import type { ReactNode } from "react";
import Image from "next/image";
import Container from "./Container";

interface PagePhotoHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  photoSrc: string;
  photoAlt: string;
  photoCaption?: string;
  children?: ReactNode;
}

export default function PagePhotoHero({
  eyebrow,
  title,
  description,
  photoSrc,
  photoAlt,
  photoCaption,
  children,
}: PagePhotoHeroProps) {
  return (
    <section className="relative isolate -mt-18 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={photoSrc}
          alt={photoAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/70" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-primary-dark/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary-dark/60 to-transparent" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl py-32 text-center lg:py-40">
          <p className="text-eyebrow uppercase text-accent-light">{eyebrow}</p>
          <h1 className="mt-4 text-balance font-display text-display text-white">
            {title}
          </h1>
          <p className="mt-6 text-body-lg text-white/75">{description}</p>
          {children && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {children}
            </div>
          )}
        </div>
      </Container>

      {photoCaption && (
        <p className="absolute bottom-6 left-6 text-caption uppercase text-white/70 sm:bottom-8 sm:left-8">
          {photoCaption}
        </p>
      )}
    </section>
  );
}
