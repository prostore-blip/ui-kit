import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

import clsx from "clsx";

import s from "./typography.module.scss";

type TypographyProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  variant?:
    | "bold_text_14"
    | "bold_text_16"
    | "h1"
    | "h2"
    | "h3"
    | "large"
    | "medium_text_14"
    | "regular_link"
    | "regular_text_14"
    | "regular_text_16"
    | "semi_bold_small_text"
    | "small_link"
    | "small_text";
} & ComponentPropsWithoutRef<T>;

export const Typography = <T extends ElementType = "span">({
  as,
  children,
  className,
  variant = "regular_text_16",
  ...rest
}: TypographyProps<T>) => {
  const classNames = clsx(s[variant], className);
  const Component = as ?? "p";

  return (
    <Component className={classNames} {...rest}>
      {children}
    </Component>
  );
};
