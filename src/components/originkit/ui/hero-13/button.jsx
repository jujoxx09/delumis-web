"use client";

const BASE_CLASS =
  "inline-flex h-10 w-fit shrink-0 touch-manipulation items-center justify-center rounded-[8px] font-tight text-[14px] font-medium tracking-[-0.28px] whitespace-nowrap transition-[opacity,transform,border-color,background-color] duration-200 ease [-webkit-tap-highlight-color:transparent] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.97] motion-reduce:active:scale-100 cursor-pointer";

export const Button = ({
  variant = "primary",
  children,
  className = "",
  type = "button",
  ...props
}) => {
  if (variant === "secondary") {
    return (
      <button
        type={type}
        className={`hero-13-button hero-13-button--secondary ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type={type}
      className={`hero-13-button hero-13-button--primary ${className}`}
      {...props}
    >
      <span>
        {children}
      </span>

    </button>
  );
};
