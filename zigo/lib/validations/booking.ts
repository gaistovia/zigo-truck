import { z } from "zod";

export const TRUCK_TYPES = [
  "Light Truck",
  "Medium Truck",
  "Heavy Truck",
  "Trailer",
  "Flatbed",
  "Container Truck",
  "Refrigerated Truck",
] as const;

export const CARGO_TYPES = [
  "General Goods",
  "Construction Materials",
  "Agricultural Produce",
  "Machinery / Equipment",
  "Retail / FMCG",
  "Perishables (Cold Chain)",
  "Containerized Cargo",
  "Other",
] as const;

export const bookingSchema = z
  .object({
    pickupLocation: z
      .string()
      .min(3, "Enter a valid pickup location")
      .max(120, "Location is too long"),
    destination: z
      .string()
      .min(3, "Enter a valid destination")
      .max(120, "Location is too long"),
    truckType: z.enum(TRUCK_TYPES, {
      errorMap: () => ({ message: "Select a truck type" }),
    }),
    cargoType: z.enum(CARGO_TYPES, {
      errorMap: () => ({ message: "Select a cargo type" }),
    }),
    cargoWeight: z
      .string()
      .min(1, "Enter the approximate cargo weight")
      .refine((val) => !Number.isNaN(Number(val)) && Number(val) > 0, {
        message: "Enter a valid weight in tonnes",
      }),
    pickupDate: z.string().min(1, "Select a pickup date"),
    deliveryDate: z.string().min(1, "Select a delivery date"),
    customerName: z
      .string()
      .min(2, "Enter your full name")
      .max(80, "Name is too long"),
    phoneNumber: z
      .string()
      .min(9, "Enter a valid phone number")
      .regex(/^[0-9+\s-]+$/, "Enter a valid phone number"),
    email: z.string().email("Enter a valid email address"),
    notes: z.string().max(500, "Notes must be under 500 characters").optional(),
  })
  .refine(
    (data) => new Date(data.deliveryDate) >= new Date(data.pickupDate),
    {
      message: "Delivery date must be on or after the pickup date",
      path: ["deliveryDate"],
    }
  );

export type BookingFormValues = z.infer<typeof bookingSchema>;
