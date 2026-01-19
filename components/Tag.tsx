type TagProps = {
  children: string;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-sm font-medium text-black dark:border-white/15 dark:bg-white/10 dark:text-white">
      {children}
    </span>
  );
}
