import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { routing } from "@/i18n/routing";

export const alt = "London Thames International — UK Market Entry Advisory";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Metadata routes don't inherit generateStaticParams from the sibling
// layout — without this, the [locale] segment is unresolved at build time
// and the route falls back to on-demand rendering for every request.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Read once at module scope (build time) rather than per-request inside the
// handler — the docs' own pattern for local assets, and what lets this
// route be statically optimized instead of regenerated on every request.
const logoData = await readFile(
  join(process.cwd(), "public/images/logo-mark.png"),
  "base64",
);
const logoSrc = `data:image/png;base64,${logoData}`;

// Satori (the renderer behind ImageResponse) ships only a Latin font by
// default and this project deliberately doesn't add a CJK webfont anywhere
// else on the site, so Chinese glyphs here would render as blank boxes.
// The card therefore stays in English for both locales — a shared brand
// asset rather than a per-locale translation.
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "72px",
          backgroundColor: "#0b1220",
          backgroundImage:
            "radial-gradient(circle at 82% 12%, rgba(74,147,196,0.28), transparent 55%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={64} height={64} alt="" />
          <span
            style={{
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: "0.01em",
              color: "#ffffff",
            }}
          >
            London Thames International
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", width: 64, height: 3, backgroundColor: "#4a93c4" }} />
          <span
            style={{
              fontSize: 56,
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              color: "#ffffff",
              maxWidth: 880,
            }}
          >
            UK Market Entry Advisory
          </span>
          <span
            style={{
              fontSize: 24,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            London, United Kingdom
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
