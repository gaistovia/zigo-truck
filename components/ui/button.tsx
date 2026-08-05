import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-display font-medium tracking-tight transition-all duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
  {
    variants: {
      variant: {
        primary:
          "bg-brand text-white shadow-brand hover:shadow-premium-lg hover:-translate-y-0.5 active:translate-y-0",
        gold: "bg-gold-gradient text-ink shadow-gold hover:shadow-premium-lg hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "border border-ink-600/15 text-ink bg-transparent hover:border-brand/40 hover:bg-brand/5 dark:text-white dark:border-white/15 dark:hover:bg-white/5",
        ghost:
          "text-ink hover:bg-ink-600/5 dark:text-white dark:hover:bg-white/5",
        white:
          "bg-white text-ink shadow-premium hover:shadow-premium-lg hover:-translate-y-0.5",
      },
      size: {
        default: "h-12 px-7 text-sm",
        lg: "h-14 px-9 text-base",
        sm: "h-10 px-5 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <RippleLayer />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  )
);
Button.displayName = "Button";

interface ButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href: string;
}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant, size, href, children, ...props }, ref) => (
    <Link
      ref={ref}
      href={href}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <RippleLayer />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Link>
  )
);
ButtonLink.displayName = "ButtonLink";

/** Subtle sheen sweep on hover — a refined stand-in for a ripple effect. */
function RippleLayer() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-premium group-hover:translate-x-full"
    />
  );
}

export { buttonVariants };
