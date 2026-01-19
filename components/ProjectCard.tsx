import { Tag } from "./Tag";

export type Project = {
  title: string;
  growthLabel: "What I know" | "What I learned" | "What I’m aspiring to";
  description: string;
  stack: string[];
  highlights: string[];
  links?: {
    live?: string;
    repo?: string;
  };
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-white/15 dark:bg-white/5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-2 text-sm text-black/60 dark:text-white/60">
            {project.description}
          </p>
        </div>
        <div className="shrink-0">
          <Tag>{project.growthLabel}</Tag>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <span
            key={t}
            className="inline-flex items-center rounded-full bg-black/5 px-3 py-1 text-sm text-black/80 dark:bg-white/10 dark:text-white/80"
          >
            {t}
          </span>
        ))}
      </div>

      <ul className="mt-4 space-y-2 text-sm text-black/70 dark:text-white/70">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-black/40 dark:bg-white/40" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {(project.links?.live || project.links?.repo) && (
        <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
          {project.links?.live ? (
            <a
              href={project.links.live}
              className="rounded-full bg-black px-4 py-2 text-white transition hover:bg-black/85 dark:bg-white dark:text-black dark:hover:bg-white/85"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          ) : null}
          {project.links?.repo ? (
            <a
              href={project.links.repo}
              className="rounded-full border border-black/15 px-4 py-2 transition hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          ) : null}
        </div>
      )}
    </article>
  );
}
