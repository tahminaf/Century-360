"use client";

export default function BookNowButton({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        window.blvd?.openBookingWidget();
      }}
      className={className}
    >
      {children}
    </button>
  );
}