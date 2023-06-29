import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function Stack({
  className,
  isPadded = false,
  ...props
}: { isPadded?: boolean } & ComponentProps<"div">) {
  return (
    <div
      className={twMerge(
        "flex gap-2 rounded-md",
        isPadded && "px-4 py-6",
        className
      )}
      {...props}
    />
  );
}

export function HStack({ className, ...props }: ComponentProps<typeof Stack>) {
  return <Stack className={twMerge("items-center", className)} {...props} />;
}

export function VStack({ className, ...props }: ComponentProps<typeof Stack>) {
  return <Stack className={twMerge("flex-col", className)} {...props} />;
}

export function Spinner({
  className,
  type = "spinner",
  size = "sm",
}: {
  className?: string;
  type?: "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity";
  size?: "xs" | "sm" | "md" | "lg";
}) {
  return (
    <span
      className={twMerge(`loading loading-${type} loading-${size}`, className)}
    ></span>
  );
}

export function FormInputGroup({
  title,
  errorMessage,
  children,
}: {
  title: string;
  errorMessage?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{title}</span>
        <span className="label-text text-warning">{errorMessage}</span>
      </label>
      {children}
    </div>
  );
}

export default function Button({
  spinnerProps,
  loading = false,
  className,
  children,
  ...props
}: {
  spinnerProps?: ComponentProps<typeof Spinner>;
  loading?: boolean;
} & ComponentProps<"button">) {
  return (
    <button className={twMerge("btn", className)} {...props}>
      {loading && <Spinner className="mr-2" {...spinnerProps} />}
      {children}
    </button>
  );
}
