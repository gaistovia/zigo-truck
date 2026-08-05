import { Home, TruckIcon } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[90svh] items-center overflow-hidden bg-ink">
      <div className="pointer-events-none absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-brand/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />

      <Container className="relative flex flex-col items-center py-32 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-gold/20 bg-gold/5">
          <TruckIcon size={40} strokeWidth={1.5} className="text-gold" />
        </div>
        <span className="mt-8 font-display text-8xl font-bold tracking-tight text-white/10 md:text-9xl">
          404
        </span>
        <h1 className="-mt-6 font-display text-3xl font-medium text-white md:text-4xl">
          This Route Took A Wrong Turn
        </h1>
        <p className="mt-4 max-w-md text-balance text-white/60">
          The page you&apos;re looking for isn&apos;t on our delivery route.
          Let&apos;s get you back on track.
        </p>
        <ButtonLink href="/" variant="gold" size="lg" className="mt-10">
          <Home size={18} />
          Back To Home
        </ButtonLink>
      </Container>
    </section>
  );
}
