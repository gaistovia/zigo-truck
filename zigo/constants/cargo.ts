import {
  Package2,
  Boxes,
  Layers3,
  Container,
  Wheat,
  HardHat,
  Cog,
  ShoppingBag,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface CargoType {
  name: string;
  description: string;
  icon: LucideIcon;
}

export const CARGO_SHOWCASE: CargoType[] = [
  {
    name: "Cement",
    description: "Bulk and bagged cement moved with secured, weatherproof loading.",
    icon: Package2,
  },
  {
    name: "Steel",
    description: "Rebar, sheet steel and structural beams hauled on reinforced decks.",
    icon: Layers3,
  },
  {
    name: "Roofing Sheets",
    description: "Long-length sheets transported flat and strapped to prevent damage.",
    icon: Boxes,
  },
  {
    name: "Containers",
    description: "20ft and 40ft containers for export, import and sealed cargo runs.",
    icon: Container,
  },
  {
    name: "Agricultural Produce",
    description: "Grain, produce and harvests moved fast to protect freshness and value.",
    icon: Wheat,
  },
  {
    name: "Construction Materials",
    description: "Aggregates, timber and mixed site materials delivered on schedule.",
    icon: HardHat,
  },
  {
    name: "Industrial Equipment",
    description: "Heavy machinery and equipment hauled with specialized handling.",
    icon: Cog,
  },
  {
    name: "Consumer Goods",
    description: "Retail and FMCG stock distributed reliably to keep shelves full.",
    icon: ShoppingBag,
  },
];
