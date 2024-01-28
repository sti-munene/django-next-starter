import clsx from "clsx";
import React from "react";

export const baseContainerStyles =
  "w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8";
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const styles = clsx(
    "w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",
    className
  );

  return <div className={styles}>{children}</div>;
}
