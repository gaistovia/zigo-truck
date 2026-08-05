import { forwardRef, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FieldWrapperProps {
  label: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
  hint?: string;
}

export function FieldWrapper({
  label,
  error,
  required,
  children,
  className,
  hint,
}: FieldWrapperProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label className="text-sm font-medium text-ink dark:text-white">
        {label}
        {required && <span className="ml-1 text-brand dark:text-gold">*</span>}
      </label>
      {children}
      {hint && !error && (
        <span className="text-xs text-ink-600 dark:text-white/40">{hint}</span>
      )}
      {error && (
        <span className="text-xs font-medium text-red-600 dark:text-red-400">
          {error}
        </span>
      )}
    </div>
  );
}

const fieldBaseClass =
  "h-[52px] w-full rounded-xl border bg-white px-4 text-sm text-ink outline-none transition-all duration-300 ease-premium placeholder:text-ink-600/40 focus:ring-2 dark:bg-ink-800 dark:text-white dark:placeholder:text-white/30";

const fieldStateClass = (hasError?: boolean) =>
  hasError
    ? "border-red-300 focus:border-red-400 focus:ring-red-100 dark:border-red-500/40 dark:focus:ring-red-500/10"
    : "border-ink-600/10 focus:border-brand/40 focus:ring-brand/10 dark:border-white/10 dark:focus:border-gold/40 dark:focus:ring-gold/10";

interface StyledInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const StyledInput = forwardRef<HTMLInputElement, StyledInputProps>(
  ({ className, hasError, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        fieldBaseClass,
        "py-3.5",
        fieldStateClass(hasError),
        className
      )}
      {...props}
    />
  )
);
StyledInput.displayName = "StyledInput";

interface StyledSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  hasError?: boolean;
  children: ReactNode;
}

export const StyledSelect = forwardRef<HTMLSelectElement, StyledSelectProps>(
  ({ className, hasError, children, ...props }, ref) => (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          fieldBaseClass,
          "h-[52px] cursor-pointer appearance-none pr-10",
          fieldStateClass(hasError),
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        size={16}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-600/50 dark:text-white/40"
      />
    </div>
  )
);
StyledSelect.displayName = "StyledSelect";

interface StyledTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

export const StyledTextarea = forwardRef<
  HTMLTextAreaElement,
  StyledTextareaProps
>(({ className, hasError, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      fieldBaseClass,
      "h-auto min-h-[120px] resize-none py-3.5",
      fieldStateClass(hasError),
      className
    )}
    {...props}
  />
));
StyledTextarea.displayName = "StyledTextarea";
