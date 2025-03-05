import { ReactElement } from "react";
import { BadgeColor } from "./BadgeColors";

type PrettyBadgeSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

type AllowedTextElements =
  | ReactElement<"span">
  | ReactElement<"p">
  | ReactElement<"strong">
  | ReactElement<"em">
  | ReactElement<"b">
  | ReactElement<"i">
  | ReactElement<"u">
  | string;

interface BaseProps {
  color?: BadgeColor;
  size?: PrettyBadgeSize | number;
  borderRadius?: "rounded" | "pill" | number;
  id?: string;
  className?: string;
}

type PrettyBadgeProps =
  | (BaseProps & { children: AllowedTextElements; label?: never })
  | (BaseProps & { label: string; children?: never });

export { PrettyBadgeProps, PrettyBadgeSize };
