export function NumberedCircle({ n }: { n: number }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-base font-bold text-brand">
      {n}
    </div>
  );
}
