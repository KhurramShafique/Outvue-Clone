import { cn } from "@/lib/utils";

export default function GlassCard({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass glass-hover rounded-3xl p-6 sm:p-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
