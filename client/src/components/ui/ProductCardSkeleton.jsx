export default function ProductCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="aspect-[4/5.5] bg-brand-border rounded-lg" />
      <div className="pt-3 space-y-2">
        <div className="h-4 bg-brand-border rounded w-3/4" />
        <div className="h-3 bg-brand-border rounded w-1/3" />
        <div className="h-8 bg-brand-border rounded mt-3" />
      </div>
    </div>
  );
}