import Image from "next/image";

type HeroPortraitProps = {
  src?: string;
  alt?: string;
  priority?: boolean;
};

export function HeroPortrait({
  src = "/KENT.jpg",
  alt = "Portrait photo",
  priority = true,
}: HeroPortraitProps) {
  return (
    <div className="group relative mx-auto mt-6 mb-3 w-[170px] sm:w-[210px] perspective-[1200px]">
      <div
        className="relative aspect-square overflow-hidden rounded-[28px] bg-panel shadow-[0_22px_80px_-45px_rgba(0,0,0,0.65)] dark:shadow-[0_34px_120px_-60px_rgba(0,0,0,0.95)] transform-gpu transition duration-700 ease-out [transform-style:preserve-3d] [transform:rotateX(0deg)_rotateY(0deg)_translateZ(0px)] group-hover:[transform:rotateX(7deg)_rotateY(-10deg)_translateZ(10px)]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 170px, 210px"
          className="object-cover [transform:translateZ(18px)] [filter:saturate(1.06)_contrast(1.06)] dark:[filter:saturate(1.10)_contrast(1.08)_brightness(0.98)]"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(34,211,238,0.22),transparent_55%),radial-gradient(600px_circle_at_80%_70%,rgba(168,85,247,0.20),transparent_55%)] opacity-80 mix-blend-soft-light"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.10),rgba(0,0,0,0.35))] opacity-70 dark:opacity-80"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute -inset-10 rounded-[32px] opacity-40 blur-2xl bg-[radial-gradient(closest-side,rgba(34,211,238,0.25),transparent_60%),radial-gradient(closest-side,rgba(168,85,247,0.20),transparent_60%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0.0),rgba(255,255,255,0.22),rgba(255,255,255,0.0))] blur-2xl"
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-[28px] bg-[radial-gradient(closest-side,rgba(34,211,238,0.22),transparent_70%)] blur-2xl opacity-60"
      />
    </div>
  );
}
