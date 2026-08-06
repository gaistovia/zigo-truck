"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import {
  MapPin,
  Navigation,
  Truck,
  Package,
  Weight,
  CalendarDays,
  User,
  Phone,
  Mail,
  MessageSquare,
  Loader2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import {
  bookingSchema,
  type BookingFormValues,
  TRUCK_TYPES,
  CARGO_TYPES,
} from "@/lib/validations/booking";
import {
  FieldWrapper,
  StyledInput,
  StyledSelect,
  StyledTextarea,
} from "@/components/ui/form-field";
import { Button, ButtonLink } from "@/components/ui/button";

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  async function onSubmit() {
    // Demo booking flow — no backend is connected.
    // In production this calls the ZIGO dispatch API.
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setBookingRef(
      `ZG-${Math.floor(10000 + Math.random() * 89999)}`
    );
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center rounded-xl3 border border-line bg-white p-10 text-center shadow-premium-lg dark:border-white/[0.06] dark:bg-ink-700 md:p-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-500/10"
        >
          <CheckCircle2 size={40} className="text-emerald-500" />
        </motion.div>
        <h2 className="mt-8 font-display text-3xl font-semibold text-ink dark:text-white">
          Booking Request Received
        </h2>
        <p className="mt-3 max-w-md text-ink-600 dark:text-white/60">
          Your reference number is{" "}
          <span className="font-semibold text-brand dark:text-gold">
            {bookingRef}
          </span>
          . A ZIGO dispatcher will confirm your truck and driver within 2
          minutes via SMS and call.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="/track" variant="primary">
            Track This Shipment
            <ArrowRight size={16} />
          </ButtonLink>
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              reset();
              setSubmitted(false);
            }}
          >
            Book Another Truck
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-xl3 border border-line bg-white p-6 shadow-premium-lg dark:border-white/[0.06] dark:bg-ink-700 md:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FieldWrapper
          label="Pickup Location"
          required
          error={errors.pickupLocation?.message}
          className="md:col-span-1"
        >
          <div className="relative">
            <MapPin
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-600/40 dark:text-white/30"
            />
            <StyledInput
              placeholder="e.g. Maswa, Simiyu"
              className="pl-11"
              hasError={!!errors.pickupLocation}
              {...register("pickupLocation")}
            />
          </div>
        </FieldWrapper>

        <FieldWrapper
          label="Destination"
          required
          error={errors.destination?.message}
        >
          <div className="relative">
            <Navigation
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-600/40 dark:text-white/30"
            />
            <StyledInput
              placeholder="e.g. Mwanza City"
              className="pl-11"
              hasError={!!errors.destination}
              {...register("destination")}
            />
          </div>
        </FieldWrapper>

        <FieldWrapper
          label="Truck Type"
          required
          error={errors.truckType?.message}
        >
          <div className="relative">
            <Truck
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 z-10 text-ink-600/40 dark:text-white/30"
            />
            <StyledSelect
              defaultValue=""
              className="pl-11"
              hasError={!!errors.truckType}
              {...register("truckType")}
            >
              <option value="" disabled>
                Select truck type
              </option>
              {TRUCK_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </StyledSelect>
          </div>
        </FieldWrapper>

        <FieldWrapper
          label="Cargo Type"
          required
          error={errors.cargoType?.message}
        >
          <div className="relative">
            <Package
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 z-10 text-ink-600/40 dark:text-white/30"
            />
            <StyledSelect
              defaultValue=""
              className="pl-11"
              hasError={!!errors.cargoType}
              {...register("cargoType")}
            >
              <option value="" disabled>
                Select cargo type
              </option>
              {CARGO_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </StyledSelect>
          </div>
        </FieldWrapper>

        <FieldWrapper
          label="Cargo Weight (Tonnes)"
          required
          error={errors.cargoWeight?.message}
        >
          <div className="relative">
            <Weight
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-600/40 dark:text-white/30"
            />
            <StyledInput
              type="number"
              step="0.1"
              min="0"
              placeholder="e.g. 5.5"
              className="pl-11"
              hasError={!!errors.cargoWeight}
              {...register("cargoWeight")}
            />
          </div>
        </FieldWrapper>

        <div />

        <FieldWrapper
          label="Pickup Date"
          required
          error={errors.pickupDate?.message}
        >
          <div className="relative">
            <CalendarDays
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-600/40 dark:text-white/30"
            />
            <StyledInput
              type="date"
              className="pl-11"
              hasError={!!errors.pickupDate}
              {...register("pickupDate")}
            />
          </div>
        </FieldWrapper>

        <FieldWrapper
          label="Delivery Date"
          required
          error={errors.deliveryDate?.message}
        >
          <div className="relative">
            <CalendarDays
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-600/40 dark:text-white/30"
            />
            <StyledInput
              type="date"
              className="pl-11"
              hasError={!!errors.deliveryDate}
              {...register("deliveryDate")}
            />
          </div>
        </FieldWrapper>
      </div>

      <div className="my-8 h-px bg-ink-600/[0.06] dark:bg-white/[0.06]" />

      <h3 className="font-display text-lg font-semibold text-ink dark:text-white">
        Your Contact Details
      </h3>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <FieldWrapper
          label="Customer Name"
          required
          error={errors.customerName?.message}
        >
          <div className="relative">
            <User
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-600/40 dark:text-white/30"
            />
            <StyledInput
              placeholder="Full name"
              className="pl-11"
              hasError={!!errors.customerName}
              {...register("customerName")}
            />
          </div>
        </FieldWrapper>

        <FieldWrapper
          label="Phone Number"
          required
          error={errors.phoneNumber?.message}
        >
          <div className="relative">
            <Phone
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-600/40 dark:text-white/30"
            />
            <StyledInput
              type="tel"
              placeholder="+255 6XX XXX XXX"
              className="pl-11"
              hasError={!!errors.phoneNumber}
              {...register("phoneNumber")}
            />
          </div>
        </FieldWrapper>

        <FieldWrapper
          label="Email Address"
          required
          error={errors.email?.message}
          className="md:col-span-2"
        >
          <div className="relative">
            <Mail
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-600/40 dark:text-white/30"
            />
            <StyledInput
              type="email"
              placeholder="you@company.co.tz"
              className="pl-11"
              hasError={!!errors.email}
              {...register("email")}
            />
          </div>
        </FieldWrapper>

        <FieldWrapper
          label="Additional Notes"
          error={errors.notes?.message}
          hint="Loading instructions, landmark, or special handling needs"
          className="md:col-span-2"
        >
          <div className="relative">
            <MessageSquare
              size={16}
              className="pointer-events-none absolute left-4 top-4 text-ink-600/40 dark:text-white/30"
            />
            <StyledTextarea
              placeholder="Anything our driver or dispatcher should know..."
              className="pl-11"
              hasError={!!errors.notes}
              {...register("notes")}
            />
          </div>
        </FieldWrapper>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="mt-9 w-full sm:w-auto"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isSubmitting ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <Loader2 size={18} className="animate-spin" />
              Finding Your Truck...
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              Book Truck
              <ArrowRight size={18} />
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
      <p className="mt-4 text-xs text-ink-600 dark:text-white/40">
        This is a demo booking flow. No payment is collected and no real
        dispatch is triggered.
      </p>
    </motion.form>
  );
}
