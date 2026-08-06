export interface HeroScene {
  src: string;
  alt: string;
  /** Focal point for object-position, tuned per photo so the subject stays framed on all breakpoints. */
  focalPoint: string;
}

/**
 * IMPORTANT: This array currently contains only the one official ZIGO
 * photograph supplied by the client. The design is built to rotate through
 * multiple heavy-truck scenes (cement, steel, containers, agricultural
 * haulage, highway at sunrise, warehouse yard, golden hour) as described in
 * the brief — but those additional photographs have not been supplied yet.
 * Do not replace this with stock or AI-generated imagery; add real ZIGO
 * fleet photography here when available and the hero will pick it up
 * automatically with no other code changes.
 */
export const HERO_SCENES: HeroScene[] = [
  {
    src: "/images/zigo-hero-truck.png",
    alt: "ZIGO driver standing in front of a ZIGO heavy cargo truck at golden hour",
    focalPoint: "70% 30%",
  },
];
