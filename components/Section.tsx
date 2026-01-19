import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <header className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {subtitle ? (
          <p className="mt-2 max-w-2xl text-base text-black/60 dark:text-white/60">
            {subtitle}
          </p>
        ) : null}
      </header>
      {children}
    </section>
  );
}
